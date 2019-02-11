coreyladovsky [9:46 AM]
@channel WARM UP PROBLEM: https://leetcode.com/problems/duplicate-emails/
And https://leetcode.com/problems/big-countries/submissions/
LeetCode
_Big Countries - LeetCode_
Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.

coreyladovsky [9:54 AM]
In duplicate emails your hint is: group by, having, and count


//-------------------------
coreyladovsky [10:18 AM]
https://www.youtube.com/watch?v=gD935L0g0qs  - Binary Search - now.

//-------------------------

reed [10:36 AM]
So HAVING is the sql command for what's known as ~ aggregate functions ~, which is a fancy term for grouping one table based on another table (for example, how many users in each country have a net worth greater than 10k? We'd do something like SELECT * FROM users GROUP BY country_id HAVING net_worth > 10000;)

read more here: https://www.w3schools.com/sql/sql_having.asp
w3schools.com
_SQL HAVING Clause_
Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, and XML.

or rather:
Untitled
```
SELECT COUNT(id)
FROM users
GROUP BY country_id
HAVING net_worth > 10000;
```
