import React from "react";
import { Link } from "react-router-dom";
import Container from "../../modules/container/Container";

class ProductSnapshot2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts;
  }
  render() {
    if (!this.props.products) return null;
    const products = Object.values(this.props.products);
    let selectedProducts = [];
    for (let i = 3; i < products.length; i += 6) {
      if (i < 16) {
        selectedProducts.push(products[i]);
        selectedProducts.push(products[i + 1]);
      } else {
        selectedProducts.push(products[i]);
      }
    }

    return (
      <Container>
        <ul className="sample-list">
          {selectedProducts?.map((product) => {
            return (
              <li className="sample-item" key={product.id}>
                <Link className="sample-link" to={`/products/${product.id}`}>
                  <img
                    className="sample-img"
                    src={product.photoUrl}
                    alt={product.name}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }
}

export default ProductSnapshot2;
