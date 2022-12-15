const React = require('react');
const DefaultLayout = require('./Default');

class Show extends React.Component{
    render() {
        const { product } = this.props;
        return(
            <DefaultLayout title="Sharomatherapy">
                <div className='container'>
                <link rel="stylesheet" type="text/css" href="../css/show.css"/>
                <div className='product-card'>
                <h2>{product.name.toUpperCase()}</h2>
                <img src={product.img} alt={product.name} width='80%'/><br />
                <h5>{product.description}</h5>
                <p className='price'>Price: ${product.price}</p>
                <button className='button-89' role='button'>BUY</button>
                <div className='stats'>
                    <p className='category'>Category: {product.category} </p>
                    <p className='quant'>In stock: {product.quantity} </p>
                </div>
                </div><br />
                <form action={`/products/${product._id}?_method=DELETE`} method="POST">
               <input type="submit" value="DELETE"/>
               </form>
               <br />
                <a href={`/products/${product.id}/edit`}>Edit Product</a>
                </div>
            </DefaultLayout>
            
        )
    }
}

module.exports = Show