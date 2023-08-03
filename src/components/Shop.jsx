import Grid from "@mui/material/Grid";

const Shop = ({ productsList }) => {
  console.log(productsList);
  return (
    <>
      <h1>Shop</h1>
      <Grid container spacing={2}>
        {productsList.map((product) => {
          console.log(product);
          return (
            <Grid item xs={3} key={product.id}>
              <p>{product.title}</p>
              <img className="thumbnail" src={product.thumbnail} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Shop;
