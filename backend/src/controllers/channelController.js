// import mongoose, { mongo } from "mongoose";
// import { User } from "../models/userModels";

// //channel profile

// export getUserChannelProfile = async() => {
//     const {username} = req.params

//     if(username?.trim()) throw new Error("username is empty")

//     const channel = await User.aggregrate([
//         {
//             $match :{
//                 username: username?.toLowercase()
//             }
//         }, 
//         {
//             $lookup : {
//                 from: "following",
//                 localField: "_id",
//                 foreignField: "channel",
//                 as:"followers"
//             }
//         },
//         {
//             $lookup: {
//                 from: "following",
//                 localField: "_id",
//                 foreignField: "channel",
//                 as: "followersTo"
//             }
//         },
//         {
//             $addField: {
//                 followersCount: {
//                     $size: "$followers"
//                 },
//                 channelsFollowingToCount : {
//                     $size : "$followingTo"
//                 },
//                 // isFollowing: {
//                 //     $cond: {
//                 //         $if : {
//                 //             $in
//                 //         }

//                 //     }
//                 // }
//             }
//         }
//     ])
// }