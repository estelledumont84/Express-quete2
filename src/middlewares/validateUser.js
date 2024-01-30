const validateUsers = (req, res, next) => {
  const { firstname, lastname, email, city, language } = req.body;
  const errors = [];

  if (title == null) {
    errors.push({ field: "firstname", message: "This field is required" });
  }
  if (director == null) {
    errors.push({ field: "lastname", message: "This field is required" });
  }
  if (year == null) {
    errors.push({ field: "email", message: "This field is required" });
  }
  if (color == null) {
    errors.push({ field: "city", message: "This field is required" });
  }
  if (duration == null) {
    errors.push({ field: "language", message: "This field is required" });
  }
 
  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};


module.exports = validateUsers;