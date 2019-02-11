coreyladovsky [10:02 AM]
@channel WARM UP! Lets build hogwarts!

//------- the code snippet: -------
HOGWARTS
teachers
  id
  name
  subject
students
  id
  name
  house
classes
  teacher_id
  student_id
wands
  name
  type
  length
  core
  student_id

Build the following routes:
/students - GET should give all students
/students/:id - GET one student
/students - post creates a new student
/students/:id - PUT update a student
/students/house/:house - all students belong to one house
/students/:id - DELETE - kills a student
/teachers - GET gives all teachers
/teachers/:id - GET one teacher.
/teachers/:id/students - GET all students taught by a ateacher
/teachers/:id - DELETE removes a teacher
/wands GET all wands
/wands/:id DELETE -deletes a wand

10:02 AM
Create the tables and correlating routes.


//------- Reed: in postman --------
SELECT * FROM students
JOIN enrollments ON students.id = enrollments.student_id
WHERE teachers_id = 1;

SELECT *
FROM students

WHERE id IN (SELECT student_id
              FROM enrollments
              WHERE teacher_id = 1);


//-----------


 *psql -f seed.sql*

 1. make seed.sql
 2. start in apps
 3. routes


Questions:

1. what is
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
in app.js about?

terminal says things already exists.
```
INSERT 0 4
Nielenes-MacBook-Air:db nielenethomas$ psql -f seed.sql
psql:seed.sql:1: ERROR:  database "hogwarts" is being accessed by other users
DETAIL:  There is 1 other session using the database.
psql:seed.sql:2: ERROR:  database "hogwarts" already exists
You are now connected to database "hogwarts" as user "nielenethomas".
psql:seed.sql:10: ERROR:  relation "teachers" already exists
psql:seed.sql:16: ERROR:  relation "students" already exists
psql:seed.sql:29: ERROR:  relation "enrollments" already exists
psql:seed.sql:37: ERROR:  relation "wands" already exists
```
