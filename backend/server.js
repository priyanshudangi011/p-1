// // const express = require('express');
// // const cors = require('cors');
// // const connectDB = require('./config/db');
// // require('dotenv').config();

// // const app = express();
// // connectDB()
// // app.use(cors());
// // app.use(express.json());

// // app.get('/', (req, res) => {
// //   res.send('Backend is running!');
// // });

// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });

// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const connectDB = require('./config/db');
// const postRoutes = require('./routes/postRoutes');

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use('/api/posts', postRoutes);

// app.get('/', (req, res) => {
//   res.send('Backend is running!');
// });

// const startServer = async () => {
//   try {
//     await connectDB();

//     const PORT = process.env.PORT || 5000;

//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error('Server startup failed:', error.message);
//   }
// };

// startServer();


const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
  }
};

startServer();