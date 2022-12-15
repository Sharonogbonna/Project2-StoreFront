const React = require("react");
const DefaultLayout = require('./Default.jsx')

class Index extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <DefaultLayout title="Sharomatherapy">
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>
        <ul>
          {product.map((product) => {
            return (
              <li>
                <a href={`/products/${product.id}`}><img src={product.img} alt={product.name} />
                  {product.name[0].toUpperCase() + product.name.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}
 
module.exports = Index