import { useState, useMemo, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();
  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  const totalPrice = useMemo(() => {
    const results = products.reduce((results, product) => {
      console.log("tinh lai ");
      return results + product.price;
    }, 0);
    return results;
  }, [products]);
  return (
    <div style={{ padding: "10px  32px" }}>
      <input
        value={name}
        placeholder={"Enter name ... "}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder={"Enter price ... "}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total : {totalPrice}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
