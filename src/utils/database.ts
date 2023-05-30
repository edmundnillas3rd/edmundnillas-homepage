import {
  addDoc,
  collection,
  query,
  limit,
  getDocs,
  DocumentData,
  where,
} from "firebase/firestore";
import { database } from "./firebaseConfig";

export interface Post {
  author: string;
  path: string;
  timestamp: string;
}

export async function addPost(post: Post) {
  try {
    const docRef = await addDoc(collection(database, "posts"), {
      author: post.author,
      title: post.path,
      path: `posts/${post.author}/${post.timestamp}/${post.path}`,
      timestamp: post.timestamp,
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getPosts() {
  const posts: DocumentData = [];
  const q = query(collection(database, "posts"), limit(10));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => posts.push(doc.data()));

  return posts;
}

export async function getPost(post: Post) {
  let foundPost = null;
  const q = query(
    collection(database, "posts"),
    where("title", "==", post.path)
  );

  const querySnapshot = await getDocs(q);
  foundPost = querySnapshot[0];

  return foundPost;
}
