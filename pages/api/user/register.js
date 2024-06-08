import connectDB from "@/db";
import User from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All Fields are Mandatory !" });
    }
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ msg: "User already Registered !" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const result = await newUser.save();
    const token = jwt.sign({ token: result._id }, "Code_AJ", {
      expiresIn: "30d",
    });
    return res
      .status(201)
      .json({ msg: "Registered Succesfully !", token });
  }

//  res.status(200).json({msg:"i am good"});
}

// export default function rowdy(req, res) {
//   res.status(200).json({ name: "i am in register" });
// }