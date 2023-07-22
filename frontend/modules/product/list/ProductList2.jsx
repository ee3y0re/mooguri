import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/container/Container";
import "./ProductList2.scss";

class ProductListTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.props.fetchProducts().then(this.setState({ isLoading: false }));
  }
  render() {
    if (!this.props.products) return null;
    const products = Object.values(this.props.products);
    let selectedProducts = [];
    for (let i = 3; i < products.length; i += 6) {
      if (selectedProducts.length < 4) {
        selectedProducts.push([products[i], products[i + 1]]);
      }
    }

    return (
      <Container>
        <ul className="sample-two-list">
          {this.state.isLoading ? (
            <>loading</>
          ) : (
            selectedProducts?.map((pair, i) => {
              return (
                <li
                  key={i}
                  className={`sample-two-item ${i % 2 === 0 ? "even" : "odd"}`}
                >
                  {pair.map((product) => {
                    return (
                      <Link
                        key={product.id}
                        className="sample-two-link"
                        to={`/products/${product.id}`}
                      >
                        <img
                          className="sample-two-img"
                          src={product.photoUrl}
                          alt={product.name}
                        />
                      </Link>
                    );
                  })}
                </li>
              );
            })
          )}
        </ul>
      </Container>
    );
  }
}

export default ProductListTwo;
