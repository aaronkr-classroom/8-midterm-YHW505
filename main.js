"use strict";

const express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController = require('./controller/homeController'),
    errorController = require('./controller/errorController'),
    app = express();

app.set("port", process.env.PORT || 3001);

app.set("view engine", "ejs"); 
app.use(layouts); 
app.use(express.static("public"));

app.use(
    express.urlencoded({ 
        extended: false
    })
);
app.use(express.json());


app.get('/', homeController.showHome);
app.get('/transportation', homeController.showTransportation)
app.get('/contact', homeController.showSignUp); 
app.post('/contact', homeController.postedSignUp); 



app.use(errorController.resNotFound); 
app.use(errorController.resInternalError);

app.listen(app.get("port"), () => { 
    console.log(`Server running at http://localhost:${app.get("port")}`);
});