var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
        {
            name: "Cloud's Rest", 
            image: "https://farm9.staticflickr.com/8206/8265812638_8100a96382.jpg",
            description: "Bacon ipsum dolor amet boudin alcatra bresaola meatball t-bone, turducken bacon corned beef pork chop. Flank ribeye doner corned beef, kielbasa turkey frankfurter drumstick meatball venison beef t-bone. Shankle doner flank boudin picanha beef ribs pork jerky brisket fatback ham hock pig. Tongue ham filet mignon, pork kielbasa chicken andouille tri-tip tenderloin boudin salami fatback shankle. Ball tip rump tongue bacon frankfurter ham picanha ribeye pork chop jerky cow venison. Cow doner corned beef beef bacon, shankle t-bone tail short ribs pastrami ribeye landjaeger. Tail shank biltong drumstick."
        },
        {
            name: "Desert Mesa", 
            image: "https://farm9.staticflickr.com/8322/7887662552_8667d69960.jpg",
            description: "Bacon ipsum dolor amet boudin alcatra bresaola meatball t-bone, turducken bacon corned beef pork chop. Flank ribeye doner corned beef, kielbasa turkey frankfurter drumstick meatball venison beef t-bone. Shankle doner flank boudin picanha beef ribs pork jerky brisket fatback ham hock pig. Tongue ham filet mignon, pork kielbasa chicken andouille tri-tip tenderloin boudin salami fatback shankle. Ball tip rump tongue bacon frankfurter ham picanha ribeye pork chop jerky cow venison. Cow doner corned beef beef bacon, shankle t-bone tail short ribs pastrami ribeye landjaeger. Tail shank biltong drumstick."
        },
        {
            name: "Canyon Floor", 
            image: "https://farm3.staticflickr.com/2873/12758353083_0c2f1d48ac.jpg",
            description: "Bacon ipsum dolor amet boudin alcatra bresaola meatball t-bone, turducken bacon corned beef pork chop. Flank ribeye doner corned beef, kielbasa turkey frankfurter drumstick meatball venison beef t-bone. Shankle doner flank boudin picanha beef ribs pork jerky brisket fatback ham hock pig. Tongue ham filet mignon, pork kielbasa chicken andouille tri-tip tenderloin boudin salami fatback shankle. Ball tip rump tongue bacon frankfurter ham picanha ribeye pork chop jerky cow venison. Cow doner corned beef beef bacon, shankle t-bone tail short ribs pastrami ribeye landjaeger. Tail shank biltong drumstick."
        }
    ]

function seedDB() {
    // Remove data from DB
    Campground.remove({}, function(err) {
        //   if(err) {    
        //     console.log(err);
        // } 
        //     console.log("removed campgrounds");
        //         // Adding new campground data to DB
        //         data.forEach(function(seed) {
        //         Campground.create(seed, function(err, campground) {
        //           if(err) {
        //               console.log(err);
        //           } 
        //               console.log("added campgrounds");
        //               // Create a Comment
        //               Comment.create({
        //                   text: "This place is great. Wish there was internet.",
        //                   author: "Homer"
        //               }, function(err, comment) {
        //                   if(err) {
        //                       console.log(err);
        //                   } else {
        //                       campground.comments.push(comment);
        //                       campground.save();
        //                       console.log("comment added");
        //                   }
        //               });
        //         }); 
        // });
    }); 
}


module.exports = seedDB



   