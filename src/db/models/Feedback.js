import Sequelize from 'sequelize';
import {sequelize} from '../../db';
import {User} from './User';

export const Feedback = sequelize.define('feedback', {
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    senderId: Sequelize.INTEGER,
    recipientId: Sequelize.INTEGER,
    accepted: Sequelize.BOOLEAN,
    rejected: Sequelize.BOOLEAN
}, {
    tableName: 'feedback'
})

Feedback.belongsTo(User, {foreignKey: 'senderId'});