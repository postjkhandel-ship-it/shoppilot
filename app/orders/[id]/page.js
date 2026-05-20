export default function OrderDetails() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Ordre #1001</h1>
      <p>Ordredetaljer og kundedata.</p>

      <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
        <div style={card}>
          <h2>Kunde</h2>
          <p>Navn: Maria Jensen</p>
          <p>Email: maria@email.dk</p>
          <p>Telefon: +45 12345678</p>
        </div>

        <div style={card}>
          <h2>Leveringsadresse</h2>
          <p>Testvej 12</p>
          <p>4000 Roskilde</p>
          <p>Danmark</p>
        </div>

        <div style={card}>
          <h2>Produkter</h2>

          <div style={productRow}>
            <span>Produkt 1</span>
            <span>299 kr</span>
          </div>

          <div style={productRow}>
            <span>Produkt 2</span>
            <span>199 kr</span>
          </div>

          <hr />

          <strong>Total: 498 kr</strong>
        </div>

        <div style={card}>
          <h2>Ordrestatus</h2>

          <select style={input}>
            <option>Ny ordre</option>
            <option>Behandles</option>
            <option>Sendt</option>
            <option>Leveret</option>
          </select>

          <button style={button}>
            Gem status
          </button>
        </div>

        <div style={card}>
          <h2>Tracking</h2>
          <input placeholder="Tracking nummer" style={input} />
          <button style={button}>
            Gem tracking
          </button>
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

const productRow = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "12px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
