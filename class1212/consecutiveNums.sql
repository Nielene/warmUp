180. Consecutive Numbers
-- https://leetcode.com/problems/consecutive-numbers/

Write a SQL query to find all numbers that appear at least three times consecutively.

+----+-----+
| Id | Num |
+----+-----+
| 1  |  1  |
| 2  |  1  |
| 3  |  1  |
| 4  |  2  |
| 5  |  1  |
| 6  |  2  |
| 7  |  2  |
+----+-----+
For example, given the above Logs table, 1 is the only number that appears consecutively for at least three times.

+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+




# Write your MySQL query statement below
SELECT num AS ConsecutiveNums
FROM Logs
GROUP BY num
HAVING COUNT(num) >= 3


//-------------
Run Code Result
Finished
Runtime: 72 ms
Your input
{"headers": {"Logs": ["Id", "Num"]}, "rows": {"Logs": [[1, 1], [2, 1], [3, 1], [4, 2], [5, 1], [6, 2], [7, 2]]}}
Output
{"headers":["ConsecutiveNums"],"values":[[1],[2]]}
Expected
{"headers":["ConsecutiveNums"],"values":[[1]]}
