var db = require("../db/database");
var path = require("path");

module.exports = function(app){
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../client/index.html"));
    });

    app.get("/api/data", function(req, res){
        //I just need to send all the data to the angular app so i can show all my users. Help me?!
         db.find({}, function(err,post){
                res.send(post)
        })

    });

    app.post("/api/post", function(req, res){
        //I need to save my data to my database and send a response back to the front end, can you write it out? My creator started but couldn't finish. 
        new db({
            name:req.body.name, 
            age: req.body.age,
            occupation:req.body.occupation
        })
            .save(function(err){
                if(err){
                    console.log(fail)
                } else {
                    console.log(req.body)
                    res.redirect("/");
                }
            })
        });

    app.put("/api/update/:id", function(req, res){
        //My creator was pretty lazy, he starts code but doesn't finish, can you please finish this update function and have it give a response back to the front end?
        db.findByIdAndUpdate(req.query.id, {$set: {"name": req.body.name, "age": req.body.age, "occupation": req.body.occupation}},function(err, doc){
            console.log(doc);
            if(Errro){
                res.send("update Error!");
            }else {
                res.send("update Success!");
            }
        })
    });

    app.delete("/api/delete/:id", function(req, res){
        // So my creator left me before he can finish me, can you please write out the delete function to remove data from my database?
        db.find({"_id": req.query.id}).remove(function(err, id){
            if(err){
                console.log(error);
            }else {
                res.send()
    });
}