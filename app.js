var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Campground    = require("./models/campground"),
    Comment       = require("./models/comment"),
    User          = require("./models/user"),
    flash         = require("connect-flash"),
    axios         = require("axios"),
    request       = require("request"),
    seedDB        = require("./seeds");
    
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyD7Wy2pXghW0GM9-3O2Fzk7grLnwaQxzRI'
});
     
var aboutRoutes = require("./routes/about");
var commentRoutes = require("./routes/comments");
var campgroundsRoutes = require("./routes/campgrounds");
var authRoutes = require("./routes/auth");

var url = process.env.databaseURL || "mongodb://localhost/yelp_camp"
// mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
mongoose.connect(url, {useMongoClient: true});


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();  //seed db

// PASSPORT CONFIGURATION

app.use(require("express-session")({
    secret: "Boudin is the best food in the world!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next) {
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundsRoutes);
app.use(authRoutes);
app.use(aboutRoutes);



app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server Has Started!!") 
});