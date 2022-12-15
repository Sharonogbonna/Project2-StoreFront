const React = require("react");
const DefaultLayout = require('./Default.jsx')

class Index extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <DefaultLayout title="Sharomatherapy">
        <link rel="stylesheet" type="text/css" href="../css/index.css"/>
        <ul>
          {product.map((product) => {
            return (
              <li>
                <div className="item-container">
                  <div className="overlay"></div>
                  <a href={`/products/${product.id}`}><img src={product.img} alt="a photo" width='250' height='250' /><div className="product-name">{product.name[0].toUpperCase() + product.name.slice(1)}</div>
                </a>
                </div>
                
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}
 
module.exports = Index