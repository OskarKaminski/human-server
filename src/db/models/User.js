import Sequelize from 'sequelize';
import {sequelize} from '../../db';

export const User = sequelize.define('users', {
    displayName: Sequelize.STRING,
    email: Sequelize.STRING,
    photoUrl: Sequelize.STRING
})