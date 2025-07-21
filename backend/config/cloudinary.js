import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'
const uploadOnCloudinary = async (filesPath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    try {
        if (!filesPath) {
            return null
        }
        const uploadResult = await cloudinary.uploader
        .upload(filesPath)
        fs.unlinkSync(filesPath)
        return uploadResult.secure_url
    }
    catch (error) {
        fs.unlinkSync(filesPath)
        console.log(error)
    }

}
export default uploadOnCloudinary

//"w-[82%] h-[100%] flex items-center justify-start overflow-x-hidden absolute right-0 z-10"//