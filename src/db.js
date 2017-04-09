import Sequelize from 'sequelize';
import knex from 'knex';

export const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/oskar.kaminski');

export const db = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/oskar.kaminski',
    searchPath: 'knex,public'
});