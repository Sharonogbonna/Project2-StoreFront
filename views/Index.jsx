const React = require("react");
// const DefaultLayout = require('./Default.jsx')

class Index extends React.Component {
  render() {
    const { product } = this.props;
    return (
      // <DefaultLayout title="Store Front">
      <div>
        <h1>Sharon the Scents</h1>
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
      </div>
      // </DefaultLayout>
    );
  }
}
