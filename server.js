const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
// require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function(){
    console.log('Server: http://localhost:' + PORT);
});