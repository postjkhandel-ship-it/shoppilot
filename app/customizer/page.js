export default function Customizer() {
  const sections = [
    "Hero banner",
    "Produkt grid",
    "Testimonials",
    "FAQ",
    "Newsletter",
    "Footer"
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Webshop Customizer</h1>
      <p>Byg webshop med sektioner ligesom Shopify.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "25px",
          marginTop: "30px"
        }}
      >
        <div style={sidebar}>
          <h2>Sektioner</h2>

          {sections.map((section) => (
            <div key={section} style={sectionCard}>
              {section}
            </div>
          ))}

          <button style={button}>
            + Tilføj sektion
          </button>
        </div>

        <div style={preview}>
          <h2>Live Preview</h2>

          <section style={hero}>
            <h1>Velkommen til din webshop</h1>
            <p>Byg og rediger webshop uden kode.</p>
            <button style={button}>
              Shop nu
            </button>
          </section>

          <section style={{ marginTop: "30px" }}>
            <h2>Produkter</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "15px"
              }}
            >
              <div style={product}>Produkt 1</div>
              <div style={product}>Produkt 2</div>
              <div style={product}>Produkt 3</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

const sidebar = {
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

const sectionCard = {
  padding: "14px",
  background: "#f3f4f6",
  borderRadius: "10px",
  marginBottom: "12px",
  cursor: "pointer"
};

const hero = {
  background: "#f3f4f6",
  padding: "40px",
  borderRadius: "14px"
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
