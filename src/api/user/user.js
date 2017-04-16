import {User} from '../../db/models/User';
import {db} from '../../db';

function getUser (authId) {
    return User.findOne({
        where: {
            authId
        }
    });
}

export const getReceivedFeedback = (ctx) => {
    ctx.body = '';
};

export async function getUserByAuth (ctx) {
    return await db('users')
        .where('authId', ctx.params.id)
        .then(data => {
            ctx.body = data[0];
        })
};

export async function getUserById (ctx) {
    return await db('users')
        .where('id', ctx.params.id)
        .then(data => {
            ctx.body = data;
        })
};

export async function getUsers (ctx) {
    return await db('users')
        .then(data => {
            ctx.body = data;
        })
};