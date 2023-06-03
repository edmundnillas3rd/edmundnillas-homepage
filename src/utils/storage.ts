import { ref, uploadBytes, getDownloadURL, getBlob } from "firebase/storage";
import { storage } from "./firebaseConfig";

export async function uploadPost(post: Post, file: File) {
  const { author, path, timestamp } = post;
  const postRef = ref(storage, `blog_posts/${author}/${timestamp}/${path}`);
  const response = await uploadBytes(postRef, file);

  return response;
}

export async function uploadImages(imagePaths: string[], images: File[]) {
  imagePaths.forEach(async (imagePath, i) => {
    const imageRef = ref(storage, imagePath);
    await uploadBytes(imageRef, images[i]);
  });
}

export async function getImage(path: string) {
  const imgReference = ref(storage, `blog_posts_images/${path}`);
  return await getDownloadURL(imgReference);
}

export async function getMarkdownPost(post: Post) {
  const { path } = post;
  let postRef = ref(storage, path);
  const postBlob = await getBlob(postRef);
  const text = await postBlob.text();
  return text;
}

export async function getMarkdownPosts(posts: Post[]) {
  let urls: string[] = [];

  posts.forEach(async (post) => {
    const { author, path, timestamp } = post;
    urls.push(await getDownloadURL(ref(storage, path)));
  });

  return urls;
}
