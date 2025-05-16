import { User } from "../models/userModels.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    const token = await User.findById(userId);
    const accessToken = token.generateAccessToken();
    const refreshToken = token.generateRefreshToken();

    token.refreshToken = refreshToken;

    await token.save({
      validationBeforeSave: false,
    });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    return res.status(401).json({
      message:
        "Something went wrong while generating access token & refresh token",
      error: error.message,
    });
  }
};

//Registering User
export const registerUser = async (req, res, _) => {
  const { username, firstname, lastname, email, password } = req.body;
  try {
    if (
      [username, firstname, lastname, email, password].some(
        (field) => field?.trim === ""
      )
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(409).json({
        message: `Username: ${existingUser.username} or email is already exist`,
      });
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    //const coverImageLocalPath = req.files?.coverImage[0]?.path;

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }
    

    if (!avatarLocalPath) {
        return res.status(400)
        .json({ message: "Avatar file is required"})
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        return res.status(400)
        .json({ message: "Avatar file is required"})
    }
   

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email, 
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(registeredUser._id).select(
      "-password"
    );

    if (!createdUser) {
      return res
        .status(500)
        .json("Something went wrong while registering user!!!!");
    }

    return res.status(201).json({
      message: `${registeredUser.username} is successfully registered`,
      createdUser,
    });
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
  try {
    if ([email, password].some((field) => field?.trim === "")) {
      return res.status(401).json({
        message: "Please fill all the fields",
      });
    }

    const isEmailValid = await User.findOne({ email });
    if (isEmailValid) throw new Error("Invalid email or password");

    const isPasswordValid = await User.validatePassword(password);
    if (isPasswordValid) throw new Error("Invalid email or password");

    const { accessToken, refreshToken } =
      await generateAccessTokenAndRefreshToken(isEmailValid._id);

    const loggedIn = await User.findById(isEmailValid._id).select("-password");

    //cookie
    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    };

    return res
      .status(401)
      .cookie("ACCESSTOKEN", accessToken, options)
      .cookie("REFRESHTOKEN", refreshToken, options)
      .json({
        message: "Successfully logged in",
        user: loggedIn,
        accessToken,
        refreshToken,
      });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized User",
      error: error.message,
    });
  }
};

//logout
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

//getting all users
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
  //   );
  //   if (!updateUser) {
  //     return res.status(403).json("Id doesn't match");
  //   }

  //   //TODO: Max Time user can update user details [online Research]

  //   return res.status(201).json({
  //     message: `You're details are updated ${updateUser.username}`,
  //     user: updateUser,
  //   });
  // } catch (error) {
  //   return res.status(400).json({ message: "cannot update user" });
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
