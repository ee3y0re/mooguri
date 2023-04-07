import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../modules/container/Container";
import './ProductList.scss'

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const arrayOfAllProducts = Object.values(this.props.products);
    let firstSet = [];
    for (let i = 0; i < arrayOfAllProducts.length; i++) {
      if (i % 6 == 0) {
        firstSet.push(arrayOfAllProducts[i]);
      }
    }
    let secondSet = [];
    for (let j = 1; j < arrayOfAllProducts.length; j += 6) {
      secondSet.push(arrayOfAllProducts[j]);
    }
    let firstAndSecond = firstSet.concat(secondSet);

    return (
      <Container className="sample-container">
        <h3 className="sample-title">See Moo-re</h3>
        <ul className="sample-list">
          {firstAndSecond?.map((product) => {
            return (
              <li className="sample-item" key={product.id}>
                <Link to={`/products/${product.id}`} className="sample-link">
                  <img
                    src={product.photoUrl}
                    alt={`${product.name}`}
                    className="sample-img"
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

export default ProductList;
