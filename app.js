/*
const express = require('express');
const app = express();

const port = 3000;
app.get("/index", (req, res) =>{
    res.send('Hola Mundo');
});

app.listen(port, () => {
    console.log(`Example app listening`+`at http://localhost:${port}`);
});

app.use(express.static('public'));

app.get('admin/create', (req, res) => {
    res.sendFile(__dirname + './create.html')
});

*/
const express = require('express');

const saludoRoutes= require('./routes/saludoRoutes');
const userRoutes= require('./routes/userRoutes');

const PORT = 3000;
const app = express();

app.use(express.json());


app.use("/saludo",saludoRoutes);

/*app.use("/users",usersRoutes);*/
app.use("/user",userRoutes);


app.listen( PORT,() => {
    console.log ("server running at port: " + PORT);
});
