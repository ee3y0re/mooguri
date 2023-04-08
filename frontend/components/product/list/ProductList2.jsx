import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../modules/container/Container";
import './ProductList2.scss'

class ProductListTwo extends React.Component {
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
        <ul className="sample-two-list">
          {selectedProducts?.map((product) => {
            return (
              <li className="sample-two-item" key={product.id}>
                <Link className="sample-two-link" to={`/products/${product.id}`}>
                  <img
                    className="sample-two-img"
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

export default ProductListTwo;
