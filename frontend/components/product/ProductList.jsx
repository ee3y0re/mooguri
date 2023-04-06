import React from "react";
import { Link } from "react-router-dom";
import Container from "../../modules/container/Container";

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
      // <div className="section-product-index">
      //   <div className="product-index-grid-container">
      //     <div className="product-index-row">
      //       <h1 className="product-index-title">See MOO-re</h1>
      //       <ul className="ul-product-index-row-list">
      //         {
      //           firstAndSecond?.map((product) => {
      //             return (
      //               <div
      //                 className="product-index-row-list-items-container"
      //                 key={product.id.toString()}
      //               >
      //                 <li className="product-index-row-list-items">
      //                   <Link
      //                     to={`/products/${product.id}`}
      //                   >
      //                     <img
      //                       src={product.photoUrl}
      //                       alt={`${product.name}`}
      //                       className="product-index-thumbnail"
      //                     />
      //                   </Link>
      //                 </li>
      //               </div>
      //             )
      //           })
      //         }
      //       </ul>
      //     </div>
      //   </div>
      // </div>
      <Container className="sample-container">
        <h3 className="sample-title">See Moo-re</h3>
        <ul className="sample-list">
          {firstAndSecond?.map((product) => {
            return (
              <li className="sample-item">
                <Link to={`/products/${product.id}`}>
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
