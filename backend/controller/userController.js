import User from "../model/userModel.js"

export const getCurrentUser = async (req, res) => {
    try {
        console.log(" Inside getCurrentUser, req.userId =", req.userId);

        const user = await User.findById(req.userId).select("-password");

        if (!user) {
            console.log(" User not found for ID:", req.userId);
            return res.status(400).json({ message: "User not found" });
        }

        console.log("Found user:", user);
        return res.status(200).json(user);

    } catch (error) {
        console.error("getCurrentUser Error:", error);
        return res.status(500).json({ message: `getCurrentUser Error: ${error.message}` });
    }
};

export const getAdmin=async(req,res)=>{
    try{
        let adminEmail=req.adminEmail;
        if(!adminEmail){
            return res.status(400).json({ message: "admin not found" });
        }
        return res.status(201).json({email:adminEmail,
            role:"admin"
        })
    }
    catch(error){
        console.error("getCurrentUser Error:", error);
        return res.status(500).json({ message: `getAdmin Error: ${error.message}` });
    }
}