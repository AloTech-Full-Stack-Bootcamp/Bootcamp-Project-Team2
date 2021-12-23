const express = require("express")
const cors = require("cors")
/* CORS allows you to configure the web API's security. 
It has to do with allowing other domains to make requests against your web API. 
For example, if you had your web API on one server and your web app on another 
you could configure CORS in your Web API to allow your web app to make calls to your web API.*/

const app = express()

const corsOptions = {
    origin:"http://localhost:8081"
}

//middleware section.
app.use(cors(corsOptions))
/*when talking about express.json() & express.urlencoded, think specifically about POST & PUT requests. 
 - You aren't need of these two for DELETE & UPDATE requests.
 - You need these two for POST & PUT requests because in both of these requests, you are sending data to the server.
 - And you are asking the server to accept the  data which is enclosed in the  body of that POST & PUT request.
 */
app.use(express.json()) // express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
app.use(express.urlencoded({ extended: true })); // express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.


const db = require("./models");
const Role = db.role;

//In development, you may need to drop existing tables and re-sync database.
// So you can use force: true as code above.
db.sequelize.sync({force: 1}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});


//simple route
app.get('/', (req,res)=> {
    res.json({message: "Welcome to the API brotha!"})
})
//set port, listen for requests.
const PORT = process.env.PORT || 8080 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


//initial function helps us to create 3 rows in database.
function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }



// routes
require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);

// set port, listen for requests