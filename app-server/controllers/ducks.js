const models = require('../models/duck-schema');



const login = function(req, res){
  res.render('login',{
    title: 'DuckShare',
    pageHeader: {
      title: 'Login'
    }
                      }
)}


const register = function(req, res){
  res.render('register',{
    title: 'DuckShare',
    pageHeader: {
      title: 'Register'
    }
                      }
)}


const addUsers = async function (req, res) {
  const { forename, surname, username, email, password} = req.body;

          const newUser = new models.User({
            forename,
            surname,
            username,
            email,
            password
            }
          );

          newUser
              .save()
              .then(() => {
                console.log('User registered successfully');

                res.render('login', {title: 'Login'});
              })
              .catch((err) => {
                console.error('Error saving user:', err);
                res.status(500).json({error: 'Failed to register user'});
              });
        }
      ;






const Duck = require('../models/duck-schema'); // Import your Duck model

const homelist = async function (req, res) {
  try {
    const ducks = await Duck.find();
        res.render('duck_list', {
      title: 'DuckShare - Share your ducks with friends and more',
      pageHeader: {
        title: 'DuckShare',
        strapline: 'Share your ducks with friends and more'
      },
      sidebar: "Looking for friend for your new quacky acquaintance? Look no further.",
      duck_list: ducks // Pass the retrieved ducks to the view
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




/* GET 'Location info' page */
const duckinfo = function(req, res){
  res.render('duck-info', {
    title: 'Quacksly',
    pageHeader: {
      title: 'Quacksly'
    },
    sidebar: {
      context: 'is on DuckShare to look for new friends!!!!',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    duck: {
      name: 'Quacksly',
      rating: 3, // Include the rating here
      features: ['Yellow', 'Small', 'Rubber'],
      hobbies:['gardening', 'photography','binge-drinking'],
      reviews: [{
        author: 'BigDuckNate',
        rating: 5,
        timestamp: '16 July 2013',
        reviewText: 'What a great duck. I can\'t say enough good things about him.'
      }, {
        author: 'Pawel Kaminski',
        rating: 3,
        timestamp: '16 June 2013',
        reviewText: 'He is great Quack.'
      }]
    }
  });
};


/* GET 'Add review' page */
const addReview = function(req, res){
  res.render('duck-review-form', {
    title: 'Review Starcups on Loc8r',
    pageHeader: { title: 'Review Starcups' }
  });
};

module.exports = {
  login,
  register,
  homelist,
  duckinfo,
  addReview,
  addUsers
};


