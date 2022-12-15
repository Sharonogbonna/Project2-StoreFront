const React = require('react');
const DefaultLayout = require('./Default');

class Show extends React.Component{
    render() {
        const { product } = this.props;
        return(
            <DefaultLayout title="Sharomatherapy">
                <link rel="stylesheet" type="text/css" href="../css/show.css"/>
                <div className='product-card'>
                <h2>{product.name.toUpperCase()}</h2>
                <img src={product.img} alt={product.name} width='400' height='400'/><br />
                <h5>{product.description}</h5>
                <p className='price'>Price: ${product.price}</p>
                <button>BUY</button>
                <div className='stats'>
                    <p className='category'>Category: {product.category} </p>
                    <p className='quant'>In stock: {product.quantity} </p>
                </div>
                </div><br />
                <a href="/">Home</a> | <a href="/products">Back to Store Front</a>
                
            </DefaultLayout>
            
        )
    }
}

module.exports = Show