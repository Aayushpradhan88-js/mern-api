import { User } from "./user.models.js";

//create user

//createuser
export const createUser = async (req, res) => {
  try {
    const { username, fullname, lastname, email, password } = req.body;
    const user = await User.create({
      username,
      fullname,
      lastname,
      email,
      password,
    });

    if (!user) {
      return res.status(500).json("Something went wrong");
    }

    return res.status(201).json({
      message: `User created Successfully ${user.username}`,
      data: user,
    });
  } catch (error) {
    return res
      .status(501)
      .json({ message: "User not created check all the fields " });
  }
};

//login user
/*
Algorithm
1.get the user email, password
2. is the field empty check
3. validating email and password 
4. hashing password and comparing it to the db password
 */

export const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isEmailValid = await User.findOne({ email });
    if (isEmailValid === "") {
      return res.status(401).json({
        message: "Please try again and fill al the fields with email",
      });
    }

    const isPasswordValid = await User.validatePassword(password);
    if (isPasswordValid === "") throw new Error("please fill all the field");
  } catch (error) {
    return res.status(401).json({
      message: "Please try again and fill al the fields with password",
    });
  }
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
};

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

// export { createUser, getUsers, getUser, updateUser, deleteUser }
