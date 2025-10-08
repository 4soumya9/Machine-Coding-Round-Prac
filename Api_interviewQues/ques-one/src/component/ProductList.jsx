import { useEffect, useState } from "react";

// Ques:1->Fetch an API that returns a list of product IDs. For each product ID, fetch additional details using another API.
// Display the complete product information on the UI using React.

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productIdApi = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(productIdApi);
        const data = await res.json();
        const productIds = data.map((product) => product.id);
        console.log("IDS:" + productIds);

        const productDetails = await Promise.all(
          productIds.map(async (id) => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            console.log(res);
            return await res.json();
          })
        );
        setProducts(productDetails);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading Products</p>;
  }
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
