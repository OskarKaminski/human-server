const pg = require('pg');
const _ = require('lodash');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/oskar.kaminski';

const client = new pg.Client(connectionString);
client.connect();
const create = client.query(
    `CREATE TABLE feedback(
    id SERIAL PRIMARY KEY, 
    type VARCHAR(40) not null, 
    description VARCHAR(40) not null,
    "senderId" integer not null,
    "recipientId" integer not null,
    accepted boolean DEFAULT false,
    rejected boolean DEFAULT false,
    "updatedAt" date,
    "createdAt" date
    );`);

const insert = client.query(
    `
    INSERT INTO feedback
        (type, description, "senderId", "recipientId")
    VALUES 
        ('more', 'squats', 1, 2);
    INSERT INTO feedback
        (type, description, "senderId", "recipientId")
    VALUES 
        ('more', 'milk', 1, 2);
    INSERT INTO feedback
        (type, description, "senderId", "recipientId")
    VALUES 
        ('less', 'sleep', 2, 1);
`
);
insert.on('end', () => {
    client.end();
});