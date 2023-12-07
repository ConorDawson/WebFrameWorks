const models = require('../models/duck-schema');
const Duck = require('../models/home-schema'); // Import your Duck model



const login = function(req, res){
  res.render('login',{
    title: 'DuckShare',
    pageHeader: {
      title: 'Login'
    }
                      }
)}


const duckform = function(req, res){
  res.render('add-duck',{
    title: 'DuckShare',
    pageHeader: {
      title: 'Add Duck'
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



const checkUser = async function (req, res) {
  const { username, password } = req.body;

  try {
    const user = await models.User.findOne({ username });

    if (user && user.password === password) {
      // Call homelist function if user is found and credentials match
      await homelist(req, res);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    console.error('Error checking user:', err);
    res.status(500).json({ error: 'Failed to check user' });
  }
};
  
  








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

                res.render('login', {title: 'DuckShare',
              pageHeader:{
                title: 'Login'
              }});
              })
              .catch((err) => {
                console.error('Error saving user:', err);
                res.status(500).json({error: 'Failed to register user'});
              });
        };







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



const addDuck = async function (req, res) {
  const { name, features, hobbies } = req.body;

  // Splitting features and hobbies by commas to create arrays
  const featuresArray = features.split(',').map(feature => feature.trim());
  const hobbiesArray = hobbies.split(',').map(hobby => hobby.trim());

  try {
    // Creating a new duck instance with the extracted data
    const newDuck = new Duck({
      name,
      features: featuresArray,
      hobbies: hobbiesArray
    });

    // Saving the new duck to the database
    await newDuck.save();
    
    console.log('Duck added successfully');
    // Redirect or render a page after adding the duck
    await homelist(req, res);
  } catch (err) {
    console.error('Error adding duck:', err);
    res.status(500).json({ error: 'Failed to add duck' });
  }
};






const duckinfo = async function (req, res) {
  try {
    const duckId = req.params.id; // Assuming duckId is passed in the request parameters
    const duck = await Duck.findOne({ _id: duckId }); // Find a duck by its ID

    if (!duck) {
      return res.status(404).json({ message: 'Duck not found' });
      // Or handle the case where the duck with the given ID doesn't exist
    }

    res.render('duck-info', {
      title: `Duck Details - ${duck.name}`,
      pageHeader: {
        title: 'Duck Details',
        strapline: duck.name // Use duck name or any other relevant info
      },
      duck: duck // Pass the retrieved duck to the view
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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
  addUsers,
  checkUser,
  duckform,
  addDuck
};


