const React = require("react");
const DefaultLayout = require("./Default");

class Show extends React.Component {
  render() {
    const { product } = this.props;
    const renderForm = () => {
      if (product.quantity > 0) {
        return <div className="stats"><form action={`/products/buy/${product.id}?_method=PUT`} method="POST" >
          <input type="submit" className="button-89" value="BUY" />
        </form>

          <p className="category">Category: <em>{product.category}</em> </p>
          <p className="quant">Stock: {product.quantity} </p>
        </div>
      } else {
        return <div className="stats">
          <p className="category">Category: {product.category} </p>
          <button className="button-89" disabled >OUT OF STOCK</button>
        </div>
      }
    }
    return (
      <DefaultLayout title="Sharomatherapy">
        <div className="container">
          <link rel="stylesheet" type="text/css" href="../css/show.css" />
          <div className="product-card">
            <h2 id="product-name" >{product.name.toUpperCase()}</h2>
            <div className="product">
              <img src={product.img} alt={product.name} width="60%" id="product-img" />
              <br />
              <div className="product-info">
                <p><strong>Description:</strong>  {product.description}</p>
                <p className="price"> <strong>Price:</strong> ${product.price}</p>
                {renderForm()}
              </div>
            </div>
          </div>
          <br />
          <div className="edit-delete" >
            <form
              action={`/products/${product._id}?_method=DELETE`}
              method="POST">
              <input type="submit" value="Delete Product" id="delete-btn" className="button" />
            </form>
            <a href={`/products/${product.id}/edit`}> <button className="button">Edit Product</button></a>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
