const React = require('react');
const DefaultLayout = require('./Default.jsx');

class New extends React.Component{
    render() {
        return(
            <DefaultLayout title="Sharomatherapy">
              <div className='container'>
                <link rel="stylesheet" type="text/css" href="../css/new.css"/>
                <h2>Add New Product</h2>
                <form action="/products" method="POST">
                    <div className="name-and-input">
                    Item Name: <input className='input-field' type="text" name='name' /><br />
                    </div>
                    
                    <div className="name-and-input">
                    Image Source: <input className='input-field' type="text" name="img" /><br />
                    </div>
                   
                    <div className="name-and-input">
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" className='input-field' name='description' id='description' rows="3" cols="30"></textarea><br />
                    </div>
                    
                    <div className="name-and-input">
                    Price: <input className='input-field' type="number" name="price" /><br />
                    </div>
                    
                    <div className="name-and-input">
                    Quantity: <input className='input-field' type="number" name='quantity'/><br />
                    </div>
                    
                    <div className="name-and-input">
                    <label htmlFor="category">Category: <br /> </label>
                    <select name="category" id='category'>
                    <option value="" disabled selected hidden>Please Select a Category...</option>
                        <option value="candle">Candle</option>
                        <option value="perfume">Perfume</option>
                        <option value="oil">Oil</option>
                        <option value="wax">Scented Wax</option>
                        <option value="spray">Room/Linen Spray</option>
                        <option value="other">Other</option>
                    </select><br /><br />
                    </div>
                    
                    <input className='button' type="submit" id='submit' value="Create Product" />
                </form>
            </div>  
            </DefaultLayout>
            
        );
    };
;}

module.exports = New;