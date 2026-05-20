export default function AIProductGenerator() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <div style={{ maxWidth: "1000px" }}>
        <h1>AI Product Generator</h1>

        <p>
          Beskriv et produkt — så genererer AI titel, pris,
          produkttekst, SEO og billeder.
        </p>

        <div style={layout}>
          <div style={card}>
            <h2>Produkt input</h2>

            <textarea
              placeholder="Fx: Elektrisk tandbørste med ultralyd teknologi til hvidere tænder"
              style={textarea}
            />

            <select style={input}>
              <option>Produktkategori</option>
              <option>Beauty</option>
              <option>Elektronik</option>
              <option>Fitness</option>
              <option>Fashion</option>
              <option>Pets</option>
            </select>

            <select style={input}>
              <option>Brand stil</option>
              <option>Premium</option>
              <option>Luxury</option>
              <option>Minimalistisk</option>
              <option>High Conversion</option>
            </select>

            <button style={button}>
              Generér produkt med AI
            </button>
          </div>

          <div style={card}>
            <h2>AI Resultat</h2>

            <div style={previewImage}>
              Produktbillede Preview
            </div>

            <h2>
              Ultra Sonic Toothbrush Pro
            </h2>

            <strong style={{ fontSize: "22px" }}>
              399 kr
            </strong>

            <p>
              Oplev en dybere tandrensning med ultralyd teknologi,
              der hjælper med at reducere plak og give et sundere smil.
            </p>

            <div style={seoBox}>
              <h3>SEO</h3>

              <p>
                <strong>SEO titel:</strong>
                {" "}
                Ultra Sonic Toothbrush Pro | Dybere Tandrensning
              </p>

              <p>
                <strong>Meta beskrivelse:</strong>
                {" "}
                Effektiv ultralyd tandbørste til renere tænder og sundere tandkød.
              </p>
            </div>

            <button style={secondary}>
              Tilføj til webshop
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const layout = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "24px",
  marginTop: "30px"
};

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px"
};

const textarea = {
  width: "100%",
  minHeight: "180px",
  padding: "16px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  marginBottom: "16px"
};

const input = {
  width: "100%",
  padding: "14px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  marginBottom: "14px"
};

const previewImage = {
  height: "220px",
  background: "#f3f4f6",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px"
};

const seoBox = {
  background: "#f8fafc",
  borderRadius: "12px",
  padding: "18px",
  marginTop: "20px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "16px 20px",
  borderRadius: "12px",
  cursor: "pointer",
  width: "100%"
};

const secondary = {
  background: "#16a34a",
  color: "white",
  border: "none",
  padding: "14px 18px",
  borderRadius: "12px",
  cursor: "pointer",
  marginTop: "20px"
};
