const express = require('express');
const app = express();

const db = require('./models');

const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
})

