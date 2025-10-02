import { Schema, model } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      required: true,
      default: [],
    },
    thumbnail: {
      type: String,
      required: true,
    },
    liveUrl: {
      type: String,
      default: "",
    },
    repoUrl: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, 
  }
);

export const Project = model<IProject>("Project", projectSchema);
