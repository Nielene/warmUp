actors:
id,
movies_id,

directors:
id,
name,
movies_id,

movies:
id,
name,
rt_rating,
director_id,
actors_id
yr_made,

JOINT table:
Actors:
movies_id,

Directors:
movies_id,

Movies:
director_id,
actors_id
yr_made,

//===============corey:======


IMDB

movies          (~plural~)
  id
  title
  release_date
  director_id
  gross_profits
  synopsis
  genre

  director:movies     1:many
  actors:movies       many:many! Not done.
  average score is DERIVED FROM more basic rating info. should not let that update an entire table.


actors
  id
  name
  birthdate
  gender

  1. single source of truth: if age is x and birthday is y, i can get both of those things from birthdate.
  2. DRY - dont repeat yourself

  actors can have many movies
  movies can have many actors.
  an apt table for this might be "castings."

castings // JOIN TABLE
  id
  movies_id
  actor_id
      will get all the actors where the castings.movies_id = ...

      many:1 OR 1:many direct foreign keys.
      foreign keys rep 1:many relationships

      manyto many relationships need a foreign (joint) table!

      or can use sselect within select.
      see README.md line 11.
      Select in Select VS JOIN


directors
  id
  name
  birthdate
  birthplace
  gender


  not movie bc already referenced under movies. no cross referencing.


reviews
  id
  rating
  movie_id
  author_id
  body

  //========corey: or... "": =====


movies          (~plural~)
  id
  title
  release_date
  <!-- director_id -->
  gross_profits
  synopsis
  <!-- genre -->

genres        GENRES TABLE
  id
  type

movie_genres    GENRES/MOVIES JOIN TABLE
  id
  movies_id
  genres_id

users
  id
  name
  birthdate
  birthplace
  gender

<!-- credits
  id
  type -->

abilities
  id
  type_id
  user_id

castings // JOIN TABLE
  id
  movies_id
  actor_id //referencing user(id)
  director_id //referencing user(id)

reviews
  id
  rating
  movie_id
  author_id
  body

  <!-- actors

  directors
  id
  name
  birthdate
  birthplace
  gender -->


IF we are only keeping track of ONE THING - type of genre, maybe another table for it is too much. but if want maximum flexibilty for the future wanting anotehr cooulumn eventurally, that's why we would want it.


ROUTES!
/movies - GET give all movies
/movies/:id - GET gives back one movie
/movies/:id/reviews GET gives all reviews for one movie
/movies/:id/cast - GET give all cast for one movie
/movies/:id/reviews - POST add a review to a movie
/movies/:id - PUT or PATCH to update a movie
/movies/:id - DELETE removes a movie from DB
/movies - POST adds a movie

/actors

/reviews/:id - DELETE a review
/reviews/:id - GET see specific movie review

/users/:id/reviews - GET all reviews from a specific user
/users - GET all users
/users/:id - GET one user
