import mongoose, { Schema, Model, Document, model } from "mongoose";

// export interface GetInTouch {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   profferedDate: string;
//   profferedTime: string;
// }

// export interface GetInTouchDocument extends GetInTouch, Document {}
// export interface IGetInTouchModel extends Model<GetInTouchDocument> {}

// export const GetInTouchSchema = new Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   address: String,
//   profferedDate: String,
//   profferedTime: String,
//   //   age: Number,
//   //   dateOfJoining: {
//   //     type: Date,
//   //     default: new Date(),
//   //   },
//   //   lastUpdated: {
//   //     type: Date,
//   //     default: new Date(),
//   //   },
//   //   gender: String,
//   //   department: String,

//   // All other required attributes
//   // should be given here
// });

// // export default GetInTouchSchema;

// // export const GetInTouchModel = model<GetInTouchDocument>(
// //   "GetInTouch",
// //   GetInTouchSchema
// // );

// const GetInTouchModel: IGetInTouchModel = mongoose.model<GetInTouchDocument>(
//   "GetInTouch",
//   GetInTouchSchema
// );
// export default GetInTouchModel;

// export type GetInTouchType = GetInTouchModel & Document;
// export interface GetInTouchModel {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   profferedDate: string;
//   profferedTime: string;
// }

// const GetInTouchSchema = new Schema(
// {
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   address: String,
//   profferedDate: String,
//   profferedTime: String,
// },
//   {
//     timestamps: true,
//   }
// );

// const GetInTouch: Model<GetInTouchType> = mongoose.model<GetInTouchType>(
//   "GetInTouch",
//   GetInTouchSchema
// );
// export default GetInTouch;

export interface GetInTouch {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  profferedDate: string;
  profferedTime: string;
}

export const getInTouchSchema = new Schema<GetInTouch>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: false },
  profferedDate: { type: String, required: false },
  profferedTime: { type: String, required: false },
});

export const GetInTouch = model<GetInTouch>("GetInTouch", getInTouchSchema);
