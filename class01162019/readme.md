coreyladovsky [9:58 AM]
@channel WARM UP! https://leetcode.com/problems/employees-earning-more-than-their-managers/
LeetCode
Employees Earning More Than Their Managers - LeetCode
Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.

//==========================

181. Employees Earning More Than Their Managers

The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.

+----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+
Given the Employee table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.

+----------+
| Employee |
+----------+
| Joe      |
+----------+

//=============================
// My solution: gave too many rows.
Subquery returns more than 1 row


# Write your MySQL query statement below
SELECT name
FROM Employee
WHERE salary > (SELECT salary FROM Employee WHERE name IN ('Sam', 'Max') )


# Write your MySQL query statement below
SELECT name
FROM Employee
WHERE salary > (SELECT salary FROM Employee WHERE managerId IN (3, 4)) AND name NOT IN ('Sam', 'Max')

//=====================================
//---- Reed: ----- *MYSQL* exercises -------
//-- Platforms for running SQL and storing databases (Postgres vs MySQL) --


Join Table with itself!

Id    Name    Salary    ManagerId     id    Name    Salary
1      Joe    70000     3             3     Sam     60000

Aliases! it's not just for SELECT any more.
can use alias as teh same name as the table, because never going to be using the ... again. (JonB asked).

now can refer to two diff versions of the table as table 'a' and the ohter as table 'b'.

aliases are used alot when joining a table with itself.

//---- Solution -----------------
# Write your MySQL query statement below
SELECT a.Name AS Employee
FROM Employee As a
JOIN Employee As b
ON a.ManagerId = b.Id
WHERE a.Salary > b.Salary;
//------------------------------

1. select one specific column - just select for a name.
- a.Name as employee. knowing wea re going to join two tables.
2. call left hand table 'b'
3. call right hand table 'a'
4. some point at which they share similarity.
5. pivot point - very relevant - managerId
6. id on right (mangaerId)
7. id on left (id)
8. by default Join is a left inner join.
- so return NULL on the right.
9.

if had done:

# Write your MySQL query statement below
SELECT *
FROM Employee As a
JOIN Employee As b
ON a.ManagerId = b.Id

would have gotten:

{"headers":
["Id","Name","Salary","ManagerId","Id","Name","Salary","ManagerId"],
"values":
[[1,"Joe",70000,3,3,"Sam",60000,null],
[2,"Henry",80000,4,4,"Max",90000,null]]}

we avoid this by being very specific about what we want.

//---------
b is a copy of the employees table.
a is all the Employees
b is the managers table.
a is the specific table.
.Name is teh specific column

//==========================
