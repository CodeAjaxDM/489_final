
CREATE TABLE IF NOT EXISTS USER ( username TEXT PRIMARY KEY NOT NULL, password TEXT NOT NULL );

CREATE TABLE IF NOT EXISTS COURSE ( courseid TEXT PRIMARY KEY NOT NULL, coursename TEXT NOT NULL, semester TEXT NOT NULL, coursedesc TEXT, enrollnum INTEGER NOT NULL, enteredby TEXT NOT NULL );

DELETE FROM USER;

DELETE FROM COURSE;

INSERT INTO USER VALUES ('subu', '1234');

INSERT INTO COURSE VALUES ('CPTS_489', 'Web Development', 'Spring', 'course about web development', 80, 'subu');