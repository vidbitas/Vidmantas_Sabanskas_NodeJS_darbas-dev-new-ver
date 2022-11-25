// import express from 'express';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import session from 'express-session';

// const app = express();
// const httpServer = createServer(app);

// // const io = Server(http, {
// //   cors: {
// //     origin: 'http://localhost:3000',
// //   },
// // });

// const sessionMiddleware = session({
//   secret: 'changeit',
//   resave: false,
//   saveUninitialized: false,
// });

// app.use(sessionMiddleware);

// app.post('/login', (req, res) => {
//   req.session.authenticated = true;
//   res.status(204).end();
// });

// const io = new Server(httpServer);

// // convert a connect middleware to a Socket.IO middleware
// const wrap = (middleware) => (socket, next) =>
//   middleware(socket.request, {}, next);

// io.use(wrap(sessionMiddleware));

// // only allow authenticated users
// io.use((socket, next) => {
//   const session = socket.request.session;
//   if (session && session.authenticated) {
//     next();
//   } else {
//     next(new Error('unauthorized'));
//   }
// });

// io.on('connection', (socket) => {
//   console.log(socket.request.session);
// });

// app.listen(5000, () => console.log('Server on'));

///////////////////////////////////////////////
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import session from 'express-session';
import http from 'http';
// import { createServer } from 'http';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
// const server = createServer(app);
import fileUpload from 'express-fileupload';
// const server = require('http').createServer();
// const socketIo = require('socket.io')(server);
import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';
import commentRoute from './routes/comments.js';
import socketRoute from './routes/socketRoute.js';

dotenv.config();

const app = express();
// const httpServer = createServer(app);

// const io = new Server(httpServer, {
//   cors: {
//     origin: 'http://localhost:3000',
//   },
// });

// const io = new Server(httpServer);
// app.set('socketio', io);
// socketRoute(io);

// Constants
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(fileUpload());
app.use(express.json());
app.use(express.static('uploads'));

// Routes
// http://localhost:5000
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentRoute);

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.nowuhyi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    );

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
start();
