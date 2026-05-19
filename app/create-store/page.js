export default function CreateStore() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Opret webshop</h1>
      <p>Start en ny webshop på Shoppilot.</p>

      <div style={card}>
        <input placeholder="Webshop navn" style={input} />
        <input placeholder="Branche / niche" style={input} />
        <input placeholder="Ønsket subdomæne fx minshop" style={input} />

        <select style={input}>
          <option>Vælg template</option>
          <option>Mode webshop</option>
          <option>Beauty webshop</option>
          <option>Elektronik webshop</option>
          <option>Digital produkt webshop</option>
        </select>

        <button style={button}>Opret webshop</button>
      </div>
    </main>
  );
}

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px",
  maxWidth: "650px",
  marginTop: "30px"
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "14px 20px",
  borderRadius: "10px",
  cursor: "pointer"
};
