const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/oskar.kaminski';

const client = new pg.Client(connectionString);
client.connect();
const create = client.query(
    `
    CREATE TABLE users (
        id SERIAL PRIMARY KEY, 
        "displayName" VARCHAR(40) not null,
        email VARCHAR(40) not null,
        "photoUrl" VARCHAR(200),
        "authId" VARCHAR(80) not null,
        "updatedAt" date,
        "createdAt" date
    );
`);

const insert = client.query(
    `
    INSERT INTO users
        ("displayName", email, "photoUrl", "authId")
    VALUES
        ('Hairy Boy', 'hairy@human.com',
        'http://findicons.com/files/icons/1072/face_avatars/300/i05.png',
        'veKMpWQy9NazTZiLfXF3qtmVFOq2');
    INSERT INTO users
        ("displayName", email, "photoUrl", "authId")
    VALUES
        ('Skins Bro', 'skins@human.com',
        'http://findicons.com/files/icons/1072/face_avatars/300/a01.png',
        'Kb9NWUBv3TQylNMFFliPoPjW8gI3');
    INSERT INTO users
        ("displayName", email, "photoUrl", "authId")
    VALUES
        ('Old Man', 'oldasfuck@human.com',
        'https://pickaface.net/assets/images/slides/slide2.png',
        '7ozwe7grKUYvpS5bYV84U8NaTuj2');`
);
insert.on('end', () => {
    client.end();
});