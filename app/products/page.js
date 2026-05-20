export default function Products() {
  const products = [
    {
      id: 1,
      name: "Eksempel Produkt",
      price: "299 kr",
      stock: "På lager"
    },
    {
      id: 2,
      name: "Premium Produkt",
      price: "499 kr",
      stock: "På lager"
    },
    {
      id: 3,
      name: "Test Produkt",
      price: "199 kr",
      stock: "Kladde"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Produkter</h1>
      <p>Opret, rediger og administrér produkter.</p>

      <div style={box}>
        <h2>Opret nyt produkt</h2>

        <input
          placeholder="Produktnavn"
          style={input}
        />

        <input
          placeholder="Pris"
          style={input}
        />

        <textarea
          placeholder="Beskrivelse"
          style={{
            ...input,
            minHeight: "100px"
          }}
        />

        <button style={button}>
          Gem produkt
        </button>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Produktoversigt
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: "20px"
        }}
      >
        {products.map((product) => (
          <div key={product.id} style={card}>
            <div style={imageBox}>
              Produktbillede
            </div>

            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>Status: {product.stock}</p>

            <a
              href={`/products/${product.id}`}
              style={buttonLink}
            >
              Rediger produkt
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

const box = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px",
  maxWidth: "700px",
  marginTop: "25px"
};

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "20px"
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const imageBox = {
  height: "160px",
  background: "#f3f4f6",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "15px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};

const buttonLink = {
  display: "inline-block",
  background: "#111827",
  color: "white",
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: "10px"
};
