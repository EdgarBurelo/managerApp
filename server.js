const express = require('express');
const cors = require('cors');

const app = express();

let PORT = process.env.PORT || 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(express.static('client/build'));

app.get("/api",(req,res) => {
    console.log('Resolved');
    res.json([{ id: 1, name: 'algo1' }, { id: 2, name: 'algo2' }]);
});

// db.sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});
// }).catch((err) => {

//     if (err) throw err;

//     console.log("EROROOOR");
// });