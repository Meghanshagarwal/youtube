import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
      throw new Error("File path is required for upload");

      const response = await cloudinary.uploader.upload(localfilePath, {
        resource_type: "auto",
      });
      console.log("File uploaded successfully", response.url);
      return response;
    }
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
    console.error("Error uploading file to Cloudinary", error);
  }
};

export { uploadOnCloudinary };
