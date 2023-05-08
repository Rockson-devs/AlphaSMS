const NewStudent = require("../models/NewStudent");

exports.searchStudent = async (req, res) => {
  let searchTerm = req.query.search_query;
  const searchedStudents = await NewStudent.find({
    surname: { $regex: searchTerm, $options: "i" },
  }).exec();
  res.render("search", {
    searchedStudents,
  });
};
