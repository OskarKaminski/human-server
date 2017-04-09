import {User} from '../../db/models/User';

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

export async function getUserById (ctx) {
    ctx.body = await getUser(ctx.params.id)
};