let getHomePage = (req, res) => {
  return res.render("homepage.ejs");
};

let getAbout = (req, res) => {
  return res.render("test/about.ejs");
};

// object: {
//     key: '' ,
//     value: ''
// }
module.exports = {
  getHomePage: getHomePage,
  getAbout: getAbout,
};
