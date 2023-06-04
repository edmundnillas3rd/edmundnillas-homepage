import {
  addDoc,
  collection,
  query,
  limit,
  getDoc,
  getDocs,
  DocumentData,
  documentId,
  doc,
  setDoc,
} from "firebase/firestore";
import { database } from "./firebaseConfig";

// TODO (Edmund): Revise the function in order to insert document id
// before the document gets created
export async function addPost(post: Post) {
  const { author, title, path, timestamp, images } = post;

  const docRef = doc(collection(database, "blog_posts"));
  await setDoc(docRef, {
    author,
    title,
    path: `blog_posts/${author}/${docRef.id}/${path}`,
    timestamp,
    images
  })

  // const docRef = await addDoc(collection(database, "blog_posts"), {
  //   author,
  //   title,
  //   path,
  //   timestamp,
  //   images,
  // });

  return docRef.id;
}

export async function getPosts() {
  const posts: DocumentData = [];
  const q = query(collection(database, "blog_posts"), limit(10));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => posts.push({ id: doc.id, data: doc.data() }));

  return posts;
}

export async function getPost(id: string) {
  const docPostRef = doc(database, "blog_posts", id);
  const docSnap = await getDoc(docPostRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("Document does not exist");
  }
}
