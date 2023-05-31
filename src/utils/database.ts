import {
  addDoc,
  collection,
  query,
  limit,
  getDoc,
  getDocs,
  DocumentData,
  where,
  documentId,
  doc,
} from "firebase/firestore";
import { database } from "./firebaseConfig";

export interface Post {
  author: string;
  title: string;
  path: string;
  timestamp: string;
}

export async function addPost(post: Post) {
  try {
    const { author, title, path, timestamp } = post;
    const docRef = await addDoc(collection(database, "posts"), {
      author,
      title,
      path: `posts/${author}/${timestamp}/${path}`,
      timestamp,
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getPosts() {
  const posts: DocumentData = [];
  const q = query(collection(database, "posts"), limit(10));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => posts.push({ id: doc.id, data: doc.data() }));

  return posts;
}

export async function getPost(id: string) {
  const docPostRef = doc(database, "posts", id);
  const docSnap = await getDoc(docPostRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("Document does not exist");
  }
}
