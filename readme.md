# Welcome to MentorSpace

MentorSpace is a full MERN stack application that allows students to connect with mentors in their zip code and field of interest. Our idea was inspired by our passion for encouraging students to learn outside of the traditional classroom environment and encourage professionals to talk about valuable skills required in work environments to students who want to learn. 

https://mentrme-client.herokuapp.com/

## Technologies Used

- REACT
- MongoDB
- Mongoose
- React-Materialize
- Node.js
- Axios
- Javascript
- CSS
- Express


## Routes

|   CRUD             |ROUTE                          |PURPOSE                         |
|----------------|-------------------------------|-----------------------------|
|GET|/            |render home page            |
|POST          |/login            |renders login page            |
|POST          |/me/from/token|checks on browser refresh|
|GET          |/student/:id|renders signup page|
|POST          |/student|post to student db|
|DELETE          |/:id/:mentorId|delete mentors from saved list|
|POST          |/mentors/:id|gets mentors by id|
|POST          |/getusersnearby|makes API call|


## Next Steps
- Fetch mentors on student page by their fields of interest
- implement Sockets for direct messaging between students and mentors
- create better user design experience
