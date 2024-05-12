CREATE SCHEMA main;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE main.todo (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    title TEXT NOT NULL,
    created_by TEXT,
    deleted_by TEXT,
    modified_by TEXT,
    modified_on DATE,
    created_on DATE,
    deleted_on DATE,
    created_at DATE,
    deleted boolean
);

DROP TABLE main.todo;

