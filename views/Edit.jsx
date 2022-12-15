const React = require('react');
const DefaultLayout = require('./Default.jsx');

class Edit extends React.Component{
    render() {
        const { product } = this.props
        return(
            <DefaultLayout title="Sharomatherapy">
                <div className='container'>
                <link rel="stylesheet" type="text/css" href="/css/new.css"/>
                <h2>Edit Existing Product</h2>
                <form action={`/products/${product._id}?_method=PUT`} method="POST">
                    Item Name: <input type="text" name='name' defaultValue={product.name} /><br />
                    Image Source: <input type="text" name="img" defaultValue={product.img}/><br />
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" name='description' id='description' rows="3" cols="30" defaultValue={product.description}></textarea><br />
                    Price: <input type="number" name="price" defaultValue={product.price}/><br />
                    Quantity: <input type="number" name="quantity" defaultValue={product.quantity}/><br />
                    <label htmlFor="category">Category: <br /> </label>
                    <select name="category" id='category' >
                    <option defaultValue={product.category} selected>{`${product.category}`}</option>
                        <option value="candle">Candle</option>
                        <option value="perfume">Perfume</option>
                        <option value="oil">Oil</option>
                        <option value="wax">Scented Wax</option>
                        <option value="spray">Room/Linen Spray</option>
                    </select><br /><br />
                    <input type="submit" id='submit' value="Edit Product" />
                </form>
            </div>
            </DefaultLayout>
            
        );
    };
;}

module.exports = Edit;