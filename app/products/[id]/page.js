export default function ProductDetails() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Produkt: Eksempel Produkt</h1>
      <p>Rediger produktinformation.</p>

      <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
        <div style={card}>
          <h2>Produktinformation</h2>

          <input
            placeholder="Produktnavn"
            defaultValue="Eksempel Produkt"
            style={input}
          />

          <textarea
            placeholder="Beskrivelse"
            defaultValue="Dette er en produktbeskrivelse."
            style={{
              ...input,
              minHeight: "120px"
            }}
          />

          <input
            placeholder="Pris"
            defaultValue="299 kr"
            style={input}
          />

          <select style={input}>
            <option>På lager</option>
            <option>Ikke på lager</option>
            <option>Kladde</option>
          </select>

          <button style={button}>
            Gem produkt
          </button>
        </div>

        <div style={card}>
          <h2>Produktbilleder</h2>

          <div style={imageBox}>
            Produktbillede
          </div>

          <button style={button}>
            Upload billede
          </button>
        </div>

        <div style={card}>
          <h2>SEO</h2>

          <input
            placeholder="SEO titel"
            style={input}
          />

          <textarea
            placeholder="Meta beskrivelse"
            style={{
              ...input,
              minHeight: "100px"
            }}
          />
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

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const imageBox = {
  height: "180px",
  background: "#f3f4f6",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
