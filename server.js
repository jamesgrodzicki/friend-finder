const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const exphbs = require('express-handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
    console.log('Server: http://localhost:' + PORT);
});