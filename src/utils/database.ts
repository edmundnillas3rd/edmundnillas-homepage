import { addDoc, collection } from "firebase/firestore";
import { database } from "./firebaseConfig";

export interface Post {
  author: string;
  path: string;
  timestamp: Date;
}

export async function addPost(post: Post) {
  try {
    const docRef = await addDoc(collection(database, "posts"), {
      author: post.author,
      path: `posts/${post.author}/${post.timestamp}/${post.path}`,
      timestamp: post.timestamp,
    });
  } catch (error) {
    console.error(error);
  }
}
