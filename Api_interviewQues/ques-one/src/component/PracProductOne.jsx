import { useEffect, useState } from "react";

const PreProductOne = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = "https://fakestoreapi.com/products";
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch(api);
        const res = await data.json();
        const productIds = res.map((product) => product.id);

        const productDetails = await Promise.all(
          productIds.map(async (id) => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            return await res.json();
          })
        );
        setProducts(productDetails);
      } catch (error) {
        console.error(error);
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
          <img src={product.img} alt={product.title} />
          <h4>{product.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default PreProductOne;
