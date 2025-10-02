import { Router } from "express";
import { 
  createProject, 
  deleteProject, 
  updateProject, 
  getProjectById, 
  getAllProjects
} from "./project.controller";

const router = Router();

// for admin
router.post("/", createProject);


// for public
router.get("/", getAllProjects);
router.get("/:id", getProjectById);



// for admin
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export const ProjectRoutes = router;
