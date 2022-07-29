import React from "react";
import { Link } from "react-router-dom";

class ProductSnapshot2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchProducts;
  }
  render(){
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
    };

    console.log(selectedProducts[7]?.id)

    return(
      <div className="section-product-index">
        <div className="product-index-grid-container">
          <div className="product-index-row">
            <ul className="product-index-row-2">
              <li className="product-index-row-2-items">
                <div className="product-index-row-2-item-container-2">
                  <Link 
                    to={`/products/${selectedProducts[0]?.id}`}
                  >
                    <div className="product-index-row-2-item-img-contain-big">
                      <img 
                        src={selectedProducts[0]?.photoUrl} 
                        alt={`${selectedProducts[0]?.name}`}
                        className="product-index-row-2-item-img-big" 
                      />
                    </div>
                  </Link>
                </div>
                <div className="product-index-row-2-item-container">
                  <Link 
                    to={`/products/${selectedProducts[1]?.id}`}
                  >
                    <div className="product-index-row-2-item-img-contain">
                      <img 
                        src={selectedProducts[1]?.photoUrl} 
                        alt={`${selectedProducts[1]?.name}`}
                        className="product-index-row-2-item-img" 
                      />
                    </div>
                  </Link>
                </div>
              </li>
              <li className="product-index-row-2-items">
                <div className="product-index-row-2-item-container">
                  <Link 
                    to={`/products/${selectedProducts[2]?.id}`}
                  >
                    <div className="product-index-row-2-item-img-contain">
                      <img 
                        src={selectedProducts[2]?.photoUrl} 
                        alt={`${selectedProducts[2]?.name}`}
                        className="product-index-row-2-item-img" 
                      />
                    </div>
                  </Link>
                </div>
                <div className="product-index-row-2-item-container-2">
                  <Link 
                    to={`/products/${selectedProducts[3]?.id}`}
                  >
                    <div className="product-index-row-2-item-img-contain-big">
                      <img 
                        src={selectedProducts[3]?.photoUrl} 
                        alt={`${selectedProducts[3]?.name}`}
                        className="product-index-row-2-item-img-big" 
                      />
                    </div>
                  </Link>
                </div>
              </li>
              <li className="product-index-row-2-items">
                <div className="product-index-row-2-item-container-2">
                  <Link 
                    to={`/products/${selectedProducts[4]?.id}`}
                  >
                    <div className="product-index-row-2-item-img-contain-big">
                      <img 
                        src={selectedProducts[4]?.photoUrl} 
                        alt={`${selectedProducts[4]?.name}`}
                        className="product-index-row-2-item-img-big" 
                      />
                    </div>
                  </Link>
                </div>
                <div className="product-index-row-2-item-container">
                  <Link 
                    to={`/products/${selectedProducts[5]?.id}`}
                  >
                    <div className="product-index-row-2-item-img-contain">
                      <img 
                        src={selectedProducts[5]?.photoUrl} 
                        alt={`${selectedProducts[5]?.name}`}
                        className="product-index-row-2-item-img" 
                      />
                    </div>
                  </Link>
                </div>
              </li>
              <li className="product-index-row-2-items">
                <div className="product-index-row-2-item-container">
                  <Link 
                    to={`/products/${selectedProducts[6]?.id}`}
                  >
                    <div className="product-index-row-2-item-img-contain">
                      <img 
                        src={selectedProducts[6]?.photoUrl} 
                        alt={`${selectedProducts[6]?.name}`}
                        className="product-index-row-2-item-img" 
                      />
                    </div>
                  </Link>
                </div>
                <div className="product-index-row-2-item-container-2">
                  <Link 
                    to={`/products/${selectedProducts[7]?.id}`}
                  >
                    <div className="product-index-row-2-item-img-contain-big">
                      <img 
                        src={selectedProducts[7]?.photoUrl} 
                        alt={`${selectedProducts[7]?.name}`}
                        className="product-index-row-2-item-img-big" 
                      />
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductSnapshot2;