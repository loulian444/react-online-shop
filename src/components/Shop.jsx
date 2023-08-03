import Grid from "@mui/material/Grid";
import { useState } from "react";

const Shop = ({ productsList, apiUrl }) => {
  const [productInfo, setProductInfo] = useState({});
  
  const clickHandler = (event) => {
    const id = event.target.parentNode.parentNode.parentNode.id;

    fetchProductInfo(id);

  };

  const fetchProductInfo = async (id) => {
    const response = await fetch(`${apiUrl}/${id}`);
    const data = await response.json();
    setProductInfo(data);
  };

  return (
    <>
      <h1>Shop</h1>
      <Grid container spacing={2}>
        {productsList.map((product) => {
          return (
            <Grid item xs={3} key={product.id} id={product.id}>
              <Grid container spacing={1} className="itemHeader">
                <Grid item xs={9}>
                  <p>{product.title}</p>
                </Grid>
                <Grid item xs={3}>
                  <button onClick={clickHandler}>Details</button>
                </Grid>
              </Grid>
              <img className="thumbnail" src={product.thumbnail} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Shop;
