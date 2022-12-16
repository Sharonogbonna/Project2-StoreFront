require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Store = require('./models/storeSchema.js');
//middleware
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/images'))
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
        res.render('Index', {product: allProduct});
    });
});
//NEW
app.get('/products/new', (req, res) => {
    res.render('New')
})
//DELETE
app.delete('/products/:id', (req, res) => {
    Store.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/products');
    });
});
//UPDATE
app.put('/products/buy/:id', (req, res) => {
    Store.findById(req.params.id, (err, foundProduct) => {
        let newProduct = foundProduct;
        newProduct.quantity -= 1;

        Store.findByIdAndUpdate(req.params.id, newProduct, (err, foundProduct) => {
            console.log(`sold a ${newProduct.name}`);
            res.redirect(`/products/${req.params.id}`);
        });
    });
});
app.put('/products/:id', (req,res) => {
    Store.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) =>{
        console.log(updatedProduct);
        res.redirect(`/products/${req.params.id}`);
    });
});
//CREATE
app.post('/products',(req,res) => {
    Store.create(req.body, (error, createdProduct) => {
        res.redirect('/products')
    })
})

//EDIT
app.get('/products/:id/edit', (req, res)=>{
    Store.findById(req.params.id, (err, foundProduct)=>{
      if(!err){
        res.render('Edit',{product: foundProduct});
    } else {
      res.send({ msg: err.message })
    }
    });
});
//SHOW
app.get('/products/:productID', (req, res) => {
    Store.findById(req.params.productID, (err, chosenProduct) => {
        res.render('Show', {product: chosenProduct});
    });
});
app.listen(port, function () {
    console.log('Listening...');
});