//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express(); 

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var dbConfig = {
    user:  'shashank',
    password: 'admin',
    server: 'Admin\\Dell',
    database:'dbCompany',
};

//Function to connect to database and execute query
var  executeQuery = function(res, query){             
     sql.connect(dbConfig, function (err) {
         if (err) {   
                     console.log("Error while connecting database :- " + err);
                     res.send(err);
                  }
                  else {
                         // create Request object
                         var request = new sql.Request();
                         // query to the database
                         request.query(query, function (err, res) {
                           if (err) {
                                      console.log("Error while querying database :- " + err);
                                      res.send(err);
                                     }
                                     else {
                                       res.send(res);
                                            }
                               });
                       }
      });           
}

//GET API
app.get("/api/company", function(req , res){
                var query = "select * from [company]";
                executeQuery (res, query);
});

//POST API
 app.post("/api/addCompany", function(req , res){
                var query = "INSERT INTO [company] (FName,LName,Email,CompanyName,LicenseStart, LicenseEnd) VALUES (req.body.FName,"
                    +"req.body.LName,req.body.Email,req.body.CompanyName,req.body.LicenseStart,req.body.LicenseEnd)";
                executeQuery (res, query);
});

//PUT API
 app.put("/api/company/:id", function(req , res){
                var query = "UPDATE [company] SET licenseStart= " + req.body.licenseStart  +  " , licenseEnd=  " + req.body.licenseEnd + "  WHERE Id= " + req.params.id;
                executeQuery (res, query);
});

// DELETE API
app.put("/api/changeActivation/:id", function(req , res){
    var query = "UPDATE [company] SET isActivate= " + req.body.isActivate  +  "  WHERE Id= " + req.params.id;
    executeQuery (res, query);
});
