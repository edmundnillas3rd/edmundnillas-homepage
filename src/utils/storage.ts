import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { storage } from "./firebaseConfig";
import { type Post } from "./database";

export async function uploadPost(post: Post, file: File) {
  const postRef = ref(
    storage,
    `posts/${post.author}/${post.timestamp}/${post.path}`
  );
  const response = await uploadBytes(postRef, file);

  return response;
}

export async function getPost(post: Post) {
  let postRef = ref(
    storage,
    `posts/${post.author}/${post.timestamp}/${post.path}`
  );
  let downloadUrl = await getDownloadURL(postRef);

  return downloadUrl;
}

export async function getPosts(urls: Post[]) {
  let posts = [];
  return posts;
}
