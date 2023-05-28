import { storage } from "./firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";

export async function uploadPost(path: string, file: File) {
  const postRef = await ref(storage, `posts/${path}`);
  await uploadBytes(postRef, file);
}

export async function getPost(path: string) {
  // TODO (Edmund): Get a single post from storage
  let postRef = ref(storage, path);
}

export async function getPosts() {
  // TODO (Edmund): Get at least 5 post from storage
  let posts = [];
  return posts;
}
