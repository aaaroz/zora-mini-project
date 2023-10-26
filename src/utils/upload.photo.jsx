import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { imageDB } from "../configs/firebase";

export const uploadPhoto = async (photoFile) => {
  // Check if photo is null
  if (!photoFile) return null;

  // Get the file extension
  const extension = photoFile?.name?.split(".").pop();

  // Generate a unique name for the photo
  const storageRef = ref(imageDB, `photos/${uuid()}.${extension}`);

  // Upload photo to storage
  const uploadTask = await uploadBytes(storageRef, photoFile);

  // Get the photo URL
  const downloadURL = await getDownloadURL(uploadTask.ref);
  return downloadURL;
};
