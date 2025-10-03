import mongoose, { Schema } from "mongoose";
import { IAboutMe } from "./about.interface";




const AboutMeSchema: Schema = new Schema<IAboutMe>(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String },
    lasteducation: { type: String },
    socialLinks: {
      github: { type: String },
      linkedin: { type: String },
      youtube: { type: String },
      twitter: { type: String },
      facebook: { type: String },
      instagram: { type: String },
      portfolio: { type: String },
    },
  },
  { timestamps: true }
);

export const AboutMe = mongoose.model<IAboutMe>("AboutMe", AboutMeSchema);
