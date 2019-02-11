DROP DATABASE IF EXISTS hogwarts;
CREATE DATABASE hogwarts;

\c hogwarts;

CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  subject VARCHAR
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  house VARCHAR
);

-- surplant subject bc right now teachers are teaching only one subject. this way, teachers can teach multiple subjects/classes.
-- CREATE TABLE classes (
--   id,
--   teacher_id
-- );

-- //a student adding a class to their schedule
CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  teachers_id INT REFERENCES teachers(id),
  students_id INT REFERENCES students(id)
);

CREATE TABLE wands (
  id SERIAL PRIMARY KEY,
  type VARCHAR,
  core VARCHAR,
  length INT,
  student_id INT REFERENCES students(id)
);

INSERT INTO teachers(name, subject) VALUES ('Lupin', 'DAtDA'), ('Snape', 'Potions'), ('Trelawney', 'Divination');

INSERT INTO students (name, house) VALUES ('Harry', 'Griffindor'), ('Luna', 'Ravenclaw'), ('Cedric', 'Hufflepuff'), ('Draco', 'Slytherin');


INSERT INTO enrollments (teachers_id, students_id) VALUES (1,1), (2,4), (3,2), (1,3);


INSERT INTO wands(type, core, length, student_id) VALUES ('Oak', 'Unicorn Hair', 14, 1), ('Elm', 'Dragon Heartstring', 12, 2), ('Ash', 'Phoenix Feather', 11, 3), ('Ebony', 'Unicorn Hair', 14, 1);
