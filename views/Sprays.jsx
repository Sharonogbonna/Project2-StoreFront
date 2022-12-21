const React = require("react");
const DefaultLayout = require("./Default.jsx");

class Spray extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <DefaultLayout title="Sharomatherapy">
         <div className="categories">
          Shop By Categories: 
        <a href="/products/perfume"> Perfumes</a> |  <a href="/products/oil">Essential Oils</a> |  <a href="/products/wax"> Scented Wax</a> |  <a href="/products/spray">Room and Linen Sprays</a> |  <a href="/products/candle">Candles</a> |  <a href="/products/other">Other</a>
        </div>
        <div className="container">
          <link rel="stylesheet" type="text/css" href="../css/index.css" />
          <ul>
            {product.map((product) => {
                if(product.category.toLowerCase() == 'spray'){
                    return (
                        <li>
                          <div className="item-container">
                            <a href={`/products/${product.id}`}>
                              <div className="overlay"></div>
                            </a>
                            <img
                              src={product.img}
                              alt="a photo"
                            />
                            <a href={`/products/${product.id}`}>
                              <div className="product-name">
                                {product.name[0].toUpperCase() + product.name.slice(1)}
                              </div>
                            </a>
                          </div>
                        </li>
                      );
                }
              
            })}
          </ul>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Spray;
