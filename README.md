# Intro to Backend — Node.js, Express & MongoDB

Backend built by following the freeCodeCamp tutorial
[Intro to Backend Web Development – Node.js & Express Tutorial for Beginners](https://www.youtube.com/watch?v=KOutPbKc9UM).

It covers:

- A Node project using ES modules, with `nodemon` for development
- An online MongoDB Atlas cluster, connected with Mongoose
- Database models (`User`, `Post`)
- Express APIs organised into **models → controllers → routes**
- User register / login / logout with bcrypt password hashing
- Full CRUD (Create, Read, Update, Delete) on posts
- Testing every endpoint with Postman

## Project structure

```
src/
├── index.js                 # entry point: loads .env, connects DB, starts server
├── app.js                   # Express app, middleware, route mounting
├── constants.js             # DB name
├── config/
│   └── database.js          # Mongoose connection
├── models/
│   ├── user.model.js        # User schema + bcrypt hashing
│   └── post.model.js        # Post schema
├── controllers/
│   ├── user.controller.js   # register, login, logout
│   └── post.controller.js   # create, read, update, delete
└── routes/
    ├── user.route.js        # /api/v1/users/*
    └── post.route.js        # /api/v1/posts/*
```

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas),
   add a database user, and allow your IP under **Network Access**
   (or `0.0.0.0/0` for testing).

3. Copy `.env.example` to `.env` and paste your connection string:

   ```
   PORT=4000
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>
   ```

4. Run the server:

   ```bash
   npm run dev
   ```

   You should see `MongoDB connected!` and `Server is running on port 4000`.

## API endpoints

Base URL: `http://localhost:4000/api/v1`

### Users

| Method | Endpoint          | Body                                  |
|--------|-------------------|---------------------------------------|
| POST   | `/users/register` | `{ "username", "email", "password" }` |
| POST   | `/users/login`    | `{ "email", "password" }`             |
| POST   | `/users/logout`   | `{ "email" }`                         |

### Posts (CRUD)

| Method | Endpoint           | Body                                   | Action       |
|--------|--------------------|----------------------------------------|--------------|
| POST   | `/posts/create`    | `{ "name", "description", "age" }`     | Create       |
| GET    | `/posts/getPosts`  | —                                      | Read all     |
| GET    | `/posts/:id`       | —                                      | Read one     |
| PATCH  | `/posts/:id`       | any of `name`, `description`, `age`    | Update       |
| DELETE | `/posts/:id`       | —                                      | Delete       |

## Testing with Postman

Import `postman_collection.json` into the Postman desktop app
(**File → Import**). It contains every request above. After creating a post,
copy its `_id` from the response into the collection variable `postId` to run
the get-one, update and delete requests.

Example — create a post:

```
POST http://localhost:4000/api/v1/posts/create
Content-Type: application/json

{
  "name": "Prince",
  "description": "My first post",
  "age": 20
}
```
