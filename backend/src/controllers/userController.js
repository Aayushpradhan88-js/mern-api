import { User } from "../models/userModels.js";

//Registering User
export const registerUser = async (req, res, _) => {
  const { username, firstname, lastname, email, password } = req.body;
  try {
    const existingUser = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });

    if (!existingUser) {
      return res
        .status(409)
        .json({ message: "Username or email is already exist" });
    }

    const registeredUser = await User.create({
      username,
      firstname,
      lastname,
      email,
      password: hashingPassword,
    });

    if (!registeredUser) {
      return res
        .status(400)
        .json("Something went wrong while registering user!!!!");
    }

    const userTokenGeneration = await User.generateToken(token);

    return res.status(201).json({
      message: `User created Successfully ${registeredUser.username}`,
      data: registeredUser,
      userTokenGeneration,
    });
  } catch (error) {
    return res.status(501).json({
      message: "User not created check all the fields ",
      message,
    });
  }
};

//login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.send(400).json({
        message: "Email or Password field is empty  ",
      });
    }

    const isEmailValid = await User.findOne({ email });

    if (isEmailValid === "") {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await User.validatePassword(password);
    if (isPasswordValid === "") throw new Error("Invalid email or password");

    const isTokenValid = await User.verifyToken(valid);

    return res.send(401).json({
      message: "successfully logged in",
      isTokenValid,
    })
  } catch (error) {
    return res.status(401).json({
      message: "Please try again and fill all the fields with password",
    })
  }
}

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
}

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
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id, // The ID of the user you're updating (from the URL)
      req.body, // the data like email, username, fullname, password is the actual thing we need to update
      { new: true }
    );
    if (!updateUser) {
      return res.status(403).json("Id doesn't match");
    }

    //TODO: Max Time user can update user details [online Research]

    return res.status(201).json({
      message: `You're details are updated ${updateUser.username}`,
      user: updateUser,
    });
  } catch (error) {
    return res.status(400).json({ message: "cannot update user" });
  }
}

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