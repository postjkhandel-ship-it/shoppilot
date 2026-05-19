export default function ThemeEditor() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Theme Editor</h1>
      <p>Rediger webshop-design, farver, sektioner og tekster.</p>

      <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: "25px", marginTop: "30px" }}>
        <div style={card}>
          <h2>Design</h2>

          <label>Logo tekst</label>
          <input placeholder="Min Webshop" style={input} />

          <label>Hero overskrift</label>
          <input placeholder="Velkommen til vores webshop" style={input} />

          <label>Primær farve</label>
          <input placeholder="#111827" style={input} />

          <label>CTA tekst</label>
          <input placeholder="Shop nu" style={input} />

          <button style={button}>Gem design</button>
        </div>

        <div style={preview}>
          <h2>Live Preview</h2>

          <section style={{ background: "#f3f4f6", padding: "40px", borderRadius: "14px" }}>
            <h1>Min Webshop</h1>
            <p>Velkommen til vores webshop</p>
            <button style={button}>Shop nu</button>
          </section>

          <h2 style={{ marginTop: "30px" }}>Produkter</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "15px" }}>
            <div style={product}>Produkt 1</div>
            <div style={product}>Produkt 2</div>
            <div style={product}>Produkt 3</div>
          </div>
        </div>
      </div>
    </main>
  );
}

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px"
};

const preview = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px"
};

const input = {
  width: "100%",
  padding: "12px",
  margin: "8px 0 16px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const product = {
  background: "#f1f5f9",
  borderRadius: "12px",
  padding: "30px",
  textAlign: "center"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
