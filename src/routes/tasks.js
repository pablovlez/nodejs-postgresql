import { Router } from 'express';
const router = Router();

import {getTasks, getOneTask, updateTask, deleteTask, getTasksByProject, createTask} from '../controllers/task.controller';


router.get('/',getTasks);
router.get('/:id',getOneTask);
router.post('/',createTask);
router.put('/:id', updateTask);
router.delete('/:id',deleteTask);

// /api/tasks/project/:projectid
router.get('/project/:projectid', getTasksByProject);

export default router;