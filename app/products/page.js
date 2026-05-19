export default function Products() {
  const products = [
    { name: "Eksempel produkt", price: "299 kr", stock: "På lager" },
    { name: "Premium produkt", price: "499 kr", stock: "På lager" },
    { name: "Test produkt", price: "199 kr", stock: "Kladde" }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Produkter</h1>
      <p>Opret, rediger og administrér produkter i webshoppen.</p>

      <div style={box}>
        <h2>Opret nyt produkt</h2>
        <input placeholder="Produktnavn" style={input} />
        <input placeholder="Pris" style={input} />
        <textarea placeholder="Beskrivelse" style={{ ...input, minHeight: "100px" }} />
        <button style={button}>Gem produkt</button>
      </div>

      <h2 style={{ marginTop: "40px" }}>Produktoversigt</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.name} style={card}>
            <div style={imageBox}>Billede</div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <button style={button}>Rediger</button>
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

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "20px"
};

const imageBox = {
  height: "140px",
  background: "#f1f5f9",
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
