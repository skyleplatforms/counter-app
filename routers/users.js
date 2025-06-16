import express from 'express'
import { getUsers, createUser, getuserId, deleteUser, updateUserDetails } from '../controllers/user.js'

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getuserId)

router.delete('/:id', deleteUser);

router.patch('/:id', updateUserDetails);

export default router;