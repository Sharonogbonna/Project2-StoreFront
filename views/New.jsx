const React = require('react');

class New extends React.Component{
    render() {
        return(
            <div>
                <link rel="stylesheet" type="text/css" href="../css/new.css"/>
                <h1>Add New Product</h1>
                <form action="/products" method="POST">
                    Item Name: <input type="text" name='name' /><br />
                    Image Source: <input type="text" name="img" /><br />
                    <label for="description">Description:</label>
                    <textarea type="text" name='description' id='description' rows="3" cols="30"></textarea><br />
                    Price: <input type="number" name="price" /><br />
                    Quantity: <input type="number" /><br />
                    <label for="category">Category: <br /> </label>
                    <select name="category" id='category'>
                    <option value="" disabled selected hidden>Please Select a Category...</option>
                        <option value="candle">Candle</option>
                        <option value="perfume">Perfume</option>
                        <option value="oil">Oil</option>
                        <option value="wax">Scented Wax</option>
                        <option value="spray">Room/Linen Spray</option>
                    </select><br /><br />
                    <input type="submit" id='submit' value="Create Product" />
                </form>
            </div>
        );
    };
;}

module.exports = New;