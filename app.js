var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let db = require("./models/index");
var userRouter = require("./routes/users.router.js");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", require("./routes/posts.routes"));
app.use("/api/v1/comments", require("./routes/comments.routes"));

//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: true, msg: err.message });
});
// Option 1: Passing parameters separately
// db.sequelize.sync((res)=>{
//   console.log("running------------")
//   app.listen(3000,()=>{
//     console.log(res)
//     console.log("listening on port 3000")
//   })
// })
db.sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => console.log("app started on 3000"));
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = app;
