176. Second Highest Salary
Easy
398
187
Favorite
Share
SQL Schema
Write a SQL query to get the second highest salary from the Employee table.

+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
For example, given the above Employee table, the query should return 200 as the second highest salary. If there is no second highest salary, then the query should return null.

+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+


//-------------------

SELECT salary AS SecondHighestSalary
FROM employee
ORDER BY salary desc
    limit 1 offset 1

(but they want "null" if only one table)
so:
//
SELECT MAX(salary) AS SecondHighestSalary
FROM employee
WHERE salary < (SELECT MAX(salary)
                FROM employee)
# ORDER BY salary desc
#     limit 1



**the where clause filters before ...max?... evaluates**

//----
Success
Details:
Runtime: 133 ms, faster than 52.56% of MySQL online submissions for Second Highest Salary.
//-----
