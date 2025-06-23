import dotenv from "dotenv";
dotenv.config();
import { User } from "../models/userModels.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//TEMPORARY IMPORT PACKAGES
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Registering User
export const registerUser = async (req, res) => {
  const { username, firstname, lastname, email, password } = req.body;

  if (
    [username, firstname, email, password].some((field) => field?.trim() === "")
  ) {
    throw new error(401, "All fields are required");
  };

  const existedUser = await User.findOne({
    $or: [{ username }, { email }]
  });

  if (existedUser) {
    throw new ApiError(401, "Already taken try another");
  };
  // console.log(req.files)

  const userHash = await bcrypt.hash(password, 10);

  if (!userHash) {
    throw new ApiError(500, "Password is not hashed");
  };

  const newUser = await User.create({
    username,
    firstname,
    lastname,
    email,
    password: userHash
  })

  const token = jwt.sign(
    {
      _id: newUser._id,
      email: newUser.email,
      username: newUser.username,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '1d' }

  );
  // console.log(process.env.JWT_SECRET_KEY)

  const createdUser = await User.findById(newUser._id)

  return res
    .status(201)
    .cookie("token", token)
    .json(
      new ApiResponse(
        201,
        { user: createdUser, token },
        "User registered successfully",
        token
      )
    );

};

//login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email)
  console.log(password)

  if (!email) {
    throw new ApiError(400, "Email is required");
  };

  const user = await User.findOne({ email });
  if (!user) throw new ApiError("Invalid email");

  const isPasswordValid = await user.validatePassword(password)
  if (!isPasswordValid) throw new ApiError("Invalid email or password");

  const loggedIn = await User.findById(user._id).select("-password");

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedIn,
        },
        "Successfully logged in"
      )
    );

}

/*
//logout user
export const logoutUser = async (req, res) => {
User.findByIdAndUpdate(req.user._id, { $unset: { token: 1 } });

const options = {
httpOnly: true,
secure: true,
sameSite: true,
};
return res.status(200).clearCookie("token", options).json({
message: "Successfully logout",
});
};


//update user
export const updateUser = async (req, res) => {
// try {
//   const updateUser = await User.findByIdAndUpdate(
//     req.params.id, // The ID of the user you're updating (from the URL)
//     req.body, // the data like email, username, fullname, password is the actual thing we need to update
//     { new: true }
//   )
//   if (!updateUser) {
//     return res.status(403).json("Id doesn't match")
//   }

//   //TODO: Max Time user can update user details [online Research]

//   return res.status(201).json({
//     message: `You're details are updated ${updateUser.username}`,
//     user: updateUser,
//   })
// } catch (error) {
//   return res.status(400).json({ message: "cannot update user" })
// }

console.log("files", req.files);
req.json({});
};

};
*/