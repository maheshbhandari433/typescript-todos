import { Router } from 'express'
import { createToDo, deleteToDo, getToDOs, updateToDo } from '../controllers/todos';
const router = Router();

router.post('/', createToDo);
router.get('/', getToDOs);
router.patch('/:id', updateToDo);
router.delete('/:id', deleteToDo);

export default router;





