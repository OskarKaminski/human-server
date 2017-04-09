import {db} from '../../db';

function getFeedback (id) {
    return db.select('feedback.*', 'users.displayName', 'users.photoUrl')
        .from('feedback')
        .where({
            recipientId: id,
            accepted: false,
            rejected: false
        })
        .rightJoin('users', 'feedback.senderId', 'users.id')
}

export async function getReceived (ctx) {
    const feedback = await getFeedback(ctx.params.id);
    ctx.body = feedback;
};

export async function accept (ctx) {
    return await db('feedback')
        .where('id', ctx.params.id)
        .update({
            accepted: true
        })
        .then(data => {
            ctx.body = data;
        })
}

export async function reject (ctx) {
    return await db('feedback')
        .where('id', ctx.params.id)
        .update({
            rejected: true
        })
        .then(data => {
            ctx.body = data;
        })
}