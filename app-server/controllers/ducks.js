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

/* GET 'home' page */
const homelist = function(req, res){
  res.render('duck_list', {
    title: 'DuckShare - Share your ducks with friends and more',
    pageHeader: {
      title: 'DuckShare',
      strapline: 'Share your ducks with friends and more'
    },
    sidebar: "Looking for friend for your new quacky aqquantance look no further.",
    ducks: [{
        name: 'Quacksly',
        rating: 3,
        features: ['Yellow', 'Small', 'Rubber'],
        hobbies:['swimming', 'reading','Java']
    },
    {
      name: 'Cubone',
      rating: 5,
      features: ['Orange', 'Small', 'Rubber'],
      hobbies:['flying', 'routing','camping']
  },
  {
    name: 'Oshowatt',
    rating: 4,
    features: ['Blue', 'Small', 'Rubber'],
    hobbies:['soccer', 'swimming','hiking']
},
{
  name: 'Kevin',
  rating: 3.5,
  features: ['White', 'Small', 'Rubber'],
  hobbies:['gardening', 'photography','binge-drinking']
  
}]
  });
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
  addReview
};


