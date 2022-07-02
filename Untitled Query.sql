--Be sure to create a new database through Postico. Use the name `weekend-to-do-app`
CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (40) NOT NULL,
	"completed" BOOLEAN DEFAULT FALSE
);

--Setup some test data.
INSERT INTO "tasks" 
	("task","completed")
VALUES 
	('Groceries', false);