/* GET 'home' page */
const homelist = function(req, res){
  res.render('locations-list', {
    title: 'DuckShare - Share your ducks with friends and more',
    pageHeader: {
      title: 'DuckShare',
      strapline: 'Share your ducks with friends and more'
    },
    sidebar: "Looking for friend for your new quacky aqquantance look no further.",
    locations: [{
        name: 'Quacksly',
        rating: 3,
        features: ['Yellow', 'Small', 'Rubber'],
        
    },
    {
      name: 'Cubone',
      rating: 5,
      features: ['Orange', 'Small', 'Rubber'],
      
  },
  {
    name: 'Oshowatt',
    rating: 4,
    features: ['Blue', 'Small', 'Rubber'],
    
},
{
  name: 'Kevin',
  rating: 3.5,
  features: ['White', 'Small', 'Rubber'],
  
}]
  });
};

/* GET 'Location info' page */
const locationInfo = function(req, res){
  res.render('location-info', {
    title: 'Quacksly',
    pageHeader: {
      title: 'Quacksly'
    },
    sidebar: {
      context: 'is on DuckShare to look for new friends!!!!',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: {
      name: 'Quacksly',
      rating: 3, // Include the rating here
      features: ['Yellow', 'Small', 'Rubber'],
      reviews: [{
        author: 'Simon Holmes',
        rating: 5,
        timestamp: '16 July 2013',
        reviewText: 'What a great place. I can\'t say enough good things about it.'
      }, {
        author: 'Charlie Chaplin',
        rating: 3,
        timestamp: '16 June 2013',
        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
      }]
    }
  });
};


/* GET 'Add review' page */
const addReview = function(req, res){
  res.render('location-review-form', {
    title: 'Review Starcups on Loc8r',
    pageHeader: { title: 'Review Starcups' }
  });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};


