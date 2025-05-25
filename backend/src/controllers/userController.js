import dotenv from "dotenv";
dotenv.config();
import { User } from "../models/userModels.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//Registering User
export const registerUser = async (req, res) => {
  const { username, firstname, lastname, email, password } = req.body;
  try {
    if (
      [username, firstname, lastname, email, password].some(
        (field) => field?.trim === ""
      )
    ) {
      throw new ApiError(400, "All Fields are required");
    }

    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      throw new ApiError(
        400,
        `Username: ${existingUser.username} or email is already exist`
      );
    }

    // const avatarLocalPath = req.files?.avatar[0]?.path
    //const coverImageLocalPath = req.files?.coverImage[0]?.path
    /*
    let coverImageLocalPath
    if (
      req.files &&
      Array.isArray(req.files.coverImage) &&
      req.files.coverImage.length > 0
    ) {
      coverImageLocalPath = req.files.coverImage[0].path
    }

    if (!avatarLocalPath) {
      return res.status(400).json({ message: "Avatar file is required" })
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
      return res.status(400).json({ message: "Avatar file is required" })
    }
*/
    const registeredUser = await User.create({
      username: username.toLowerCase(),
      firstname,
      lastname,
      /*
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      */
      email,
      password,
    });
    console.log(registeredUser);

    const createdUser = await User.findById(registeredUser._id).select(
      "-password "
    );
    console.log(createdUser);

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering user");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          {
            registeredUser: createdUser
          },
          "User has been successfully"
        )
      );
  } catch (error) {
    return res.status(501).json({
      message: "User not created check all the fields ",
      error: error.message,
    });
  }
};

//login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email)
  try {
    if ([email, password].some((field) => field?.trim === "")) {
      throw new ApiError(400, "All Fields are required");
    }

    const isEmailValid = await User.findOne({ email });
    if (!isEmailValid) throw new ApiError("Invalid email");

    const isPasswordValid = await isEmailValid.validatePassword(password);
    if (!isPasswordValid) throw new ApiError("Invalid email or password");

    const loggedIn = await User.findById(isEmailValid._id).select("-password");

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          {
            // user: loggedIn,
            isEmailValid: loggedIn,
          },
          "Successfully logged in"
        )
      );
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized User",
      error: error.message,
    });
  }
};

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

//getting all user
export const getUsers = async (req, res) => {
  try {
    const userDetails = await User.find();
    return res.status(201).json({
      message: "All User Data is successfully fetched",
      users: userDetails,
    });
  } catch (error) {
    return res.status(501).json({ message: "user is not get " });
  }
};

//getting user with id
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(401).json("User is does not existed");
    }

    //TODO: Max No3 time user can valid it's dataa

    return res.status(201).json({
      message: `Welcome ${user.username} again`,
      data: user,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Please try again and fill al the fields with id" });
  }
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

//delete user
export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);

    if (!deleteUser) {
      return res.status(501).json("Please Try again");
    }

    return res.status(201).json({
      message: `You're account is deleted ${deleteUser?.username}`,
      data: deleteUser,
    });
  } catch (error) {
    return res.status(501).json({ message: "cannot delete user" });
  }
};
