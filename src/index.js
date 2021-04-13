const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);

                          app.set('view engine', 'hbs');
                    app.set('views', path.join(__dirname, 'resource\\views'));

//Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
