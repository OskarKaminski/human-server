import router from 'koa-router';
import * as feedback from './feedback/feedback';
import {getUserById} from './user/user';

export const api = router();

api.get('/feedback/:id', feedback.getReceived)
api.put('/feedback/:id/accept', feedback.accept)
api.put('/feedback/:id/reject', feedback.reject)
api.get('/user/:id', getUserById)