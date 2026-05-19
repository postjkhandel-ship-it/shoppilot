export default function Dashboard() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial", background: "#f6f8fb", minHeight: "100vh" }}>
      <h1>Dashboard</h1>
      <p>Velkommen til din webshop-platform.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "20px", marginTop: "30px" }}>
        <a href="/builder" style={card}><h2>Webshop Builder</h2><p>Byg og rediger webshop</p></a>
        <a href="/products" style={card}><h2>Produkter</h2><p>Opret og styr produkter</p></a>
        <a href="/orders" style={card}><h2>Ordrer</h2><p>Se kundernes ordrer</p></a>
        <a href="/customers" style={card}><h2>Kunder</h2><p>Se dine kunder</p></a>
        <a href="/analytics" style={card}><h2>Analytics</h2><p>Følg salg og trafik</p></a>
        <a href="/checkout" style={card}><h2>Checkout</h2><p>Betalinger og gateways</p></a>
        <a href="/plans" style={card}><h2>Abonnementer</h2><p>Vælg plan</p></a>
        <a href="/settings" style={card}><h2>Indstillinger</h2><p>Domæne, betaling og webshop</p></a>
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
