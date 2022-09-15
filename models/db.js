const mongoose = require('mongoose');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}
mongoose
  .connect("mongodb+srv://hridoy:test1234@cluster0.9db0k05.mongodb.net/EmployeeDB?retryWrites=true&w=majority", OPTIONS)
  .then(() => {
    console.log("Mongodb connected--->");
  })
  .catch((err) => {
    console.error("Connection failed: ", err);
  });
require('./employee.model');