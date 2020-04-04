const db = require("../models");

module.exports = {
  createUser: async (req, res, next) => {
    try {
      let newUser = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
      };
      console.log(newUser);
      let user = await db.User.create(newUser);
      console.log(JSON.stringify(user));
      res.send(user);
    } catch (e) {
      res.status(400).send({ error: true, msg: "db insert error", err: e });
    }
  },
  getAllUsers: async (req, res, next) => {
    try {
      let users = await db.User.findAll();
      return res.send(users);
    } catch (e) {
      res.status(400).send({ error: true, msg: "db insert error", err: e });
    }
  },
  getUser: async (req, res, next) => {
    try {
      let user = await db.User.findByPk(req.params.id);
      return res.send(user);
    } catch (e) {
      res.status(400).send({ error: true, msg: "db insert error", err: e });
    }
  },
  updateUser: async (req, res) => {
    try {
      let updatedUser = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
      };
      let user = await db.User.update(updatedUser, {
        where: { id: req.params.id },
      });
      res.send(user);
    } catch (e) {
      res.status(400).send({ error: true, msg: "db insert error", err: e });
    }
  },
  createPost: async (req, res) => {
    try {
      let newpost = {
        title: req.body.title,
        description: req.body.description,
        userId: req.body.userId,
      };
      let post = await db.Post.create(newpost);
      res.send(post);
    } catch (e) {
      res.status(400).send({ error: true, msg: "db insert error", err: e });
    }
  },
  fetchAllPosts: async (req, res) => {
    try {
      let newpost = {
        title: req.body.title,
        description: req.body.description,
        userId: req.body.userId,
      };
      let post = await db.Post.findAll({ include: ["author", "comments"] });
      res.send(post);
    } catch (e) {
      res.status(400).send({ error: true, msg: "db insert error", err: e });
    }
  },
  fetchPost: async (req, res) => {
    try {
      let post = await db.Post.findByPk(req.params.id, {
        include: ["author", "comments"],
      });
      res.send(post);
    } catch (e) {
      res.status(400).send({ error: true, msg: "db insert error", err: e });
    }
  },
  updatePost: async (req, res) => {
    try {
      let updatedPost = {
        title: req.body.title,
        description: req.body.description,
        userId: req.body.userId,
      };
      let user = await db.Post.update(updatedPost, {
        where: { id: req.params.id },
      });
      res.send(user);
    } catch (e) {
      res.status(400).send({ error: true, msg: "db insert error", err: e });
    }
  },
  createComment: async (req, res) => {
    try {
      let newComment = {
        description: req.body.description,
        userId: req.body.userId,
        postId: req.body.postId,
      };
      let comment = await db.Comment.create(newComment);
      res.send(comment);
    } catch (e) {
      res.status(400).send({ error: true, msg: "db insert error", err: e });
    }
  },
  fetchAllComments: async (req, res) => {
    try {
      let comment = await db.Comment.findAll({ include: ["author", "post"] });
      res.send(comment);
    } catch (e) {
      res.status(400).send({ error: true, msg: "db insert error", err: e });
    }
  },
  fetchComment: async (req, res) => {
    try {
      let comment = await db.Comment.findByPk(req.params.id, {
        include: ["author", "post"],
      });
      res.send(comment);
    } catch (e) {
      res.status(400).send({ error: true, msg: "db insert error", err: e });
    }
  },
  updateComment: async (req, res) => {
    try {
      let updatedComment = {
        description: req.body.description,
        userId: req.body.userId,
        postId: req.body.postId,
      };
      let user = await db.Comment.update(updatedComment, {
        where: { id: req.params.id },
      });
      res.send(user);
    } catch (e) {
      res.status(400).send({ error: true, msg: "db insert error", err: e });
    }
  },
};
