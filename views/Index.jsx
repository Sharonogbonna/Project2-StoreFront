const React = require("react");
const DefaultLayout = require('./Default.jsx')

class Index extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <DefaultLayout title="Sharomatherapy">
        <div className="container" >
        <link rel="stylesheet" type="text/css" href="../css/index.css"/>
        <ul>
          {product.map((product) => {
            return (
              <li>
                <div className="item-container">
                <a href={`/products/${product.id}`}>
                  <div className="overlay"></div></a>
                  <img src={product.img} alt="a photo" width='250' height='250' />
                <a href={`/products/${product.id}`} ><div className="product-name">{product.name[0].toUpperCase() + product.name.slice(1)}</div></a>
               
                </div>
                
              </li>
            );
          })}
        </ul>
        </div>
        
      </DefaultLayout>
    );
  }
}
 
module.exports = Index