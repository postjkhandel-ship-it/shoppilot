export default function Products() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Produkter</h1>
      <p>Administrér produkter til din webshop.</p>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "20px",
          maxWidth: "700px",
          marginTop: "30px"
        }}
      >
        <h2>Tilføj produkt</h2>

        <input
          placeholder="Produktnavn"
          style={input}
        />

        <input
          placeholder="Pris (fx 299 kr)"
          style={input}
        />

        <textarea
          placeholder="Produktbeskrivelse"
          style={{
            ...input,
            minHeight: "120px"
          }}
        />

        <select style={input}>
          <option>Lagerstatus</option>
          <option>På lager</option>
          <option>Ikke på lager</option>
        </select>

        <button style={button}>
          Gem produkt
        </button>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Dine produkter</h2>

        <div style={card}>
          <h3>Eksempel produkt</h3>
          <p>Pris: 299 kr</p>
          <p>Status: På lager</p>
        </div>
      </div>

      <br />
      <a href="/dashboard">Tilbage til dashboard</a>
    </main>
  );
}

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "14px",
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

const card = {
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "20px",
  marginTop: "10px"
};
