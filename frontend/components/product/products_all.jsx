import React from "react";

class ProductsAll extends React.Component {

  componentDidMount(){
    this.props.fetchProducts();
  }



  render() { 
    const arrayOfAllProducts = Object.values(this.props.products);  
    return (
      <div>
        <br />
        <ul>
          {
            arrayOfAllProducts?.map((product) => {
              return (
                // i want to replace this with pictures
                <li key={product.id}>
                  <img src={product.photoUrl} alt="" />
                </li>              
              )
            })
          }
          <br />
        </ul>

      </div>
    );
  };
}

export default ProductsAll;