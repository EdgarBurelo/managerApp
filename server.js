const express = require('express');
const cors = require('cors');
const routes = require("./routes");
const db = require("./models");

const app = express();

let PORT = process.env.PORT || 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(express.static('client/build'));

app.use('/api', routes);

db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log('App listening on PORT ' + PORT);
    });
}).catch((err) => {
    if (err) throw err;
});