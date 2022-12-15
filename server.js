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
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'))
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
// const myFirstProduct = {
//     name: 'Miss Dior',
//     img: 'https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw681466c0/assets/Y0996347/Y0996347_C099600764_E01_GHC.jpg?sw=715&sh=773&sm=fit&imwidth=800',
//     category: 'Perfume',
//     price: 200,
//     quantity: 5,
//     description: 'she smells really good i promise'
// }
// Store.create(myFirstProduct)
// // if database transaction succeeds
// .then((product) => {
//   console.log(product)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

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