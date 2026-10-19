
const express = require('express');
// const Post = require('../models/Post');
const Post = require('../models/Post');

const router = express.Router();

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE post
router.post('/', async (req, res) => {
  try {
    const { userName, imageUrl, text } = req.body;

    if (!userName?.trim() || !text?.trim()) {
      return res.status(400).json({
        message: 'Username aur text required hain',
      });
    }

    const post = await Post.create({
      userName: userName.trim(),
      imageUrl: imageUrl || '',
      text: text.trim(),
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;