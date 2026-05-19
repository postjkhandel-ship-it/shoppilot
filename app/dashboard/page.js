export default function Dashboard() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Dashboard</h1>
      <p>Velkommen til din webshop-platform.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        <a href="/products" style={card}>
          <h2>Produkter</h2>
          <p>Administrér produkter</p>
        </a>

        <a href="/orders" style={card}>
          <h2>Ordrer</h2>
          <p>Se kundernes ordrer</p>
        </a>

        <a href="/builder" style={card}>
          <h2>Webshop Builder</h2>
          <p>Rediger design og indhold</p>
        </a>

        <a href="/settings" style={card}>
          <h2>Indstillinger</h2>
          <p>Betaling, domæne og webshop</p>
        </a>
      </div>
    </main>
  );
}

const card = {
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "20px",
  textDecoration: "none",
  color: "#111",
  background: "#fff"
};
