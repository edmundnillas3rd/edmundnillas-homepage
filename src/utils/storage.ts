import { getDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getBlob } from "firebase/storage";
import { database, storage } from "./firebaseConfig";

export async function uploadPost(id: string, file: File) {
  const snap = await getDoc(doc(database, "blog_posts", id));

  if (!snap.exists()) return null;

  const { path } = snap.data();
  const postRef = ref(storage, path);
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
