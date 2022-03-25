import React from "react";
import { Link } from "react-router-dom";


class ProductsAll extends React.Component {

  componentDidMount(){
    this.props.fetchProducts();
    // console.log(this.props.products)
  }

  render() { 
    // // version 1
    const arrayOfAllProducts = Object.values(this.props.products);  
    return (
      <div>
        <br />
        <ul>
          {
            arrayOfAllProducts?.map((product) => {
              return (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`}><img src={product.photoUrl} alt={`${product.name}`} /></Link>
                </li>              
              )
            })
          }
          <br />
        </ul>

      </div>
    );

    // // version 2 not working
    // return (
    //   <div>
    //     <ul>
    //       {
    //         this.props.products.map((product) => {
    //           return (
    //             <li key={product.id}>{product.name}</li>
    //           )
    //         })
    //       }
    //     </ul>
    //   </div>
    // )
  };
}

export default ProductsAll;