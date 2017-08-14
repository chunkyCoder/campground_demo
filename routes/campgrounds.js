var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");


// ==================================
// Campgrounds Routes
// ==================================

// INDEX Route - display all campgrounds:
router.get("/", function(req, res){
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds:allCampgrounds, currentUser: req.user});
        }
    });
});


// CREATE Route - adds campground to DB:
router.post("/", middleware.isLoggedIn, function(req, res) {
    var name = req.body.name;
    var street = req.body.street;
    var state = req.body.state;
    var zip = req.body.zip;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var amenities = req.body.amenities;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {name: name, street: street, state: state, zip: zip, price: price, image: image, description: desc, amenities: amenities, author: author};
    // Create new campsite and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});


// NEW Route - displays form for adding new campground:
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

// SHOW Route - displays information for one campground only:
router.get("/:id", function(req, res) {
    // find campground with provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            // render show template
            res.render("campgrounds/show", {campground:foundCampground});
        }
    });
   
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});




// UPDATE CAMPGROUND 
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// DESTROY Campgrounds Route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        };
    });
});





module.exports = router;