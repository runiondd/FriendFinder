// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Ahmed",
    photo: "https://pickaface.net/gallery/avatar/acrovin559439058dc7f.png",
    scores: [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;

