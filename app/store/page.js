export default function StorePreview() {
  const products = [
    { name: "Produkt 1", price: "299 kr" },
    { name: "Produkt 2", price: "399 kr" },
    { name: "Produkt 3", price: "499 kr" }
  ];

  return (
    <main style={{ fontFamily: "Arial", background: "#fff", minHeight: "100vh" }}>
      <section style={{ padding: "70px", background: "#f3f4f6" }}>
        <h1 style={{ fontSize: "54px", maxWidth: "700px" }}>
          Velkommen til din webshop
        </h1>

        <p style={{ fontSize: "20px", maxWidth: "600px", color: "#555" }}>
          Dette er en preview-side, hvor kunden kan se sin webshop før den går live.
        </p>

        <button style={button}>Shop nu</button>
      </section>

      <section style={{ padding: "50px" }}>
        <h2>Produkter</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "20px" }}>
          {products.map((product) => (
            <div key={product.name} style={card}>
              <div style={imageBox}>Produktbillede</div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button style={button}>Køb nu</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const card = {
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "20px",
  background: "#fff"
};

const imageBox = {
  height: "160px",
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
