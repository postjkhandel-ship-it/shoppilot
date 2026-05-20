export default function AIBuilder() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <div
        style={{
          maxWidth: "900px"
        }}
      >
        <h1>AI Store Builder</h1>
        <p>
          Beskriv din webshop — så bygger Shoppilot automatisk design,
          produkter, tekster og struktur.
        </p>

        <div style={card}>
          <h2>Byg webshop med AI</h2>

          <textarea
            placeholder="Fx: Lav en professionel beauty webshop med hudpleje produkter i dansk stil med premium design"
            style={textarea}
          />

          <div style={grid}>
            <select style={input}>
              <option>Niche</option>
              <option>Beauty</option>
              <option>Fashion</option>
              <option>Elektronik</option>
              <option>Fitness</option>
              <option>Pets</option>
              <option>Digital produkter</option>
            </select>

            <select style={input}>
              <option>Design stil</option>
              <option>Minimalistisk</option>
              <option>Premium</option>
              <option>Luxury</option>
              <option>Moderne</option>
            </select>
          </div>

          <input
            placeholder="Webshop navn"
            style={input}
          />

          <button style={button}>
            Generér webshop med AI
          </button>
        </div>

        <div style={previewCard}>
          <h2>AI Preview</h2>

          <div style={previewHero}>
            <h1>Din webshop preview</h1>
            <p>
              Hero, produkter, branding og sektioner bliver automatisk genereret.
            </p>

            <button style={previewButton}>
              Shop nu
            </button>
          </div>

          <div style={productGrid}>
            <div style={productCard}>
              Produkt preview
            </div>

            <div style={productCard}>
              Produkt preview
            </div>

            <div style={productCard}>
              Produkt preview
            </div>
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
  padding: "24px",
  marginTop: "30px"
};

const previewCard = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px",
  marginTop: "30px"
};

const textarea = {
  width: "100%",
  minHeight: "150px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "16px",
  marginBottom: "16px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "14px"
};

const input = {
  width: "100%",
  padding: "14px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  marginBottom: "14px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "16px 20px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold"
};

const previewHero = {
  background: "#f3f4f6",
  borderRadius: "14px",
  padding: "50px",
  marginTop: "20px"
};

const previewButton = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "14px 20px",
  borderRadius: "12px",
  cursor: "pointer"
};

const productGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "16px",
  marginTop: "25px"
};

const productCard = {
  background: "#f8fafc",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "50px",
  textAlign: "center"
};
