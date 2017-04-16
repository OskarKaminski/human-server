import router from 'koa-router';
import * as feedback from './feedback/feedback';
import {getUserById, getUsers, getUserByAuth} from './user/user';

export const api = router();

api.get('/feedback/:id', feedback.getReceived)
api.put('/feedback/:id/accept', feedback.accept)
api.put('/feedback/:id/reject', feedback.reject)
api.get('/current-user/:id', getUserByAuth)
api.get('/user/:id', getUserById)
api.get('/users/:groupId', getUsers)