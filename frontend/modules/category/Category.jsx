import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listCategoryProducts } from "../../actions/categoryActions";
import { fetchProducts } from "../../actions/productActions";
import Container from "../../components/container/Container";
import ProductItem from "../../components/list/ProductItem";
import "./Category.scss";

const Category = (props) => {
  useEffect(() => {
    dispatch(listCategoryProducts(props.match.params.categoryId));
    dispatch(fetchProducts());
  }, []);

  const category = useSelector((state) => state.entities.categories);
  const allProducts = useSelector((state) =>
    Object.values(state.entities.products)
  );
  const dispatch = useDispatch();

  if (!category || !allProducts) return null;
  const products =
    allProducts &&
    allProducts?.filter(
      (product) => category && category.productIds?.includes(product.id)
    );

  if (!products) return null;
  return (
    <div id="category" className="category">
      <Container>
        <h2 className="heading">{category.name}</h2>
        <h3 className="subheading">Find something you love</h3>
        <ul className="list">
          {products &&
            products.map((product) => {
              return (
                <ProductItem
                  className="item"
                  key={product.id}
                  id={product.id}
                  imgSrc={product.photoUrl}
                  name={product.productName}
                  price={product.price}
                  seller={product.sellerId}
                />
              );
            })}
        </ul>
      </Container>
    </div>
  );
};

export default Category;
