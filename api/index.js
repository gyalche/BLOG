import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import postRouter from './routes/posts.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import multer from 'multer';

const app = express();
dotenv.config();
app.use(morgan('dev'));

app.use(cors());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

//use cookie;
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload');
  },
  filaname: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });
//API end point;
app.post('/api/upload', upload.single('file'), function (req, res, next) {
  const file = req.file;
  res.status(200).json(file.filename);
});
app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.use;
app.listen(8800, () => {
  console.log('Connected');
});
