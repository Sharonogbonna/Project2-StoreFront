require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Store = require('./models/storeSchema.js');
//middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//mongoose
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
//home
app.get('/', (req, res) =>{
    res.render('Home')
})
//INDEX
app.get('/products', (req, res) => {
    Store.find({}, (error, allProduct) => {
        res.render('Index', {product: allProduct})
    })
})
//NEW
app.get('/products/new', (req, res) => {
    res.render('New')
})
app.listen(port, function () {
    console.log('Listening...');
});