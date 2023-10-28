import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { imageDB } from "../configs/firebase";

export const uploadProduct = async (productImage) => {
  // Check if image is null
  if (!productImage) return null;

  // Get the file extension
  const extension = productImage?.name?.split(".").pop();

  // Generate a unique name for the image
  const storageRef = ref(imageDB, `productImage/${uuid()}.${extension}`);

  // Upload image to storage
  const uploadTask = await uploadBytes(storageRef, productImage);

  // Get the image URL
  const downloadURL = await getDownloadURL(uploadTask.ref);
  return downloadURL;
};
