
// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema(
//   {
//     userName: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     imageUrl: {
//       type: String,
//       default: '',
//     },

//     text: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model('Post', postSchema);


// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema(
//   {
//     userName: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     imageUrl: {
//       type: String,
//       default: '',
//     },
//     text: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model('Post', postSchema);

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },

    imageUrl: {
      type: String,
      default: '',
    },

    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', postSchema);