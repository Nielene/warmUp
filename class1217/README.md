coreyladovsky [10:02 AM]
@channel WARM UP.
Design your own IMBD database with movies, actors, directors, and anything else you’d like. Think about your associations.


coreyladovsky [10:19 AM]
Also plan the kind of routes you might want to incorportate.



REED interrupting Corey: =======

All movies thta Brod Prott is in:

SELECT *
FROM movies
WHERE id IN (SELECT movies_id
              FROM castings
              WHERE actor_id = 2);

SELECT *
FROM movies
JOIN castings ON movies.id = castings.movies_id
WHERE castings.actor_id = 2;
