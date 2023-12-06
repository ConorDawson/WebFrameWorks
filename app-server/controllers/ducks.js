const login = function(req, res){
  res.render('login',{
    title: 'DuckShare',
    pageHeader: {
      title: 'Login'
    }
                      }
)}


const User = require('../models/user-schema'); // Import your User model

const register = async function (req, res) {

  res.render('register',{
    title: 'DuckShare',
    pageHeader: {
      title: 'Register'
    }
                      }
)

 // Assuming this script is loaded in the same page as the button
document.getElementById('loginButton').addEventListener('click', async () => {
  try {
    const forename = 'John'; // Assuming you get these values from a form
    const surname = 'Doe';
    const username = 'johndoe';
    const email = 'johndoe@example.com';
    const password = 'password123';

    const response = await fetch('/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ forename, surname, username, email, password })
    });

    if (response.ok) {
      // Handle successful registration, redirect or show a success message
      window.location.href = '/login'; // Redirect to the login page
    } else {
      // Handle registration error, show an error message
      const errorData = await response.json();
      console.error('Registration failed:', errorData.message);
      // Display an error message to the user
      // For example, show an alert or update a DOM element with the error message
    }
  } catch (error) {
    console.error('Error during registration:', error);
    // Handle any unexpected error during the registration process
  }
});

};

module.exports = register;




const Duck = require('../models/duck-schema'); // Import your Duck model

const homelist = async function (req, res) {
  try {
    const ducks = await Duck.find({});    
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
  addReview
};


