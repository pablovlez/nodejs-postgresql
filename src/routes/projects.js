import { Router } from 'express';
const router = Router();

import { createProject, getProjects, getOneProject, deleteProject, updateProject } from '../controllers/project.controller';

//routes
router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id', getOneProject);
router.delete('/:id', deleteProject);
router.put('/:id',updateProject);

export default router;