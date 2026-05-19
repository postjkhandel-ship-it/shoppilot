export default function StorePreview() {
  return (
    <main style={{ fontFamily: "Arial", background: "#fff", minHeight: "100vh" }}>
      <section style={{ padding: "60px", background: "#f6f8fb" }}>
        <h1 style={{ fontSize: "48px" }}>Din Webshop</h1>
        <p style={{ fontSize: "20px" }}>
          Her ser kunden, hvordan webshoppen kommer til at se ud.
        </p>
        <button style={button}>Shop nu</button>
      </section>

      <section style={{ padding: "50px" }}>
        <h2>Produkter</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "20px" }}>
          <div style={card}>
            <h3>Produkt 1</h3>
            <p>299 kr</p>
            <button style={button}>Køb nu</button>
          </div>

          <div style={card}>
            <h3>Produkt 2</h3>
            <p>399 kr</p>
            <button style={button}>Køb nu</button>
          </div>

          <div style={card}>
            <h3>Produkt 3</h3>
            <p>499 kr</p>
            <button style={button}>Køb nu</button>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px", background: "#f6f8fb" }}>
        <h2>Om webshoppen</h2>
        <p>Professionel webshop bygget med Shoppilot.</p>
      </section>
    </main>
  );
}

const card = {
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "20px",
  background: "#fff"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
