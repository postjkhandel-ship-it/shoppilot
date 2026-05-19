export default function Settings() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Indstillinger</h1>
      <p>Her kan brugeren styre webshop, betaling og domæne.</p>

      <div style={{ display: "grid", gap: "20px", maxWidth: "700px" }}>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h2>Webshop info</h2>
          <input placeholder="Webshop navn" style={{ padding: "12px", width: "100%", marginBottom: "10px" }} />
          <input placeholder="Support email" style={{ padding: "12px", width: "100%" }} />
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h2>Betaling</h2>
          <p>Stripe / MobilePay integration kommer her.</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h2>Domæne</h2>
          <p>Forbind eget domæne til webshoppen.</p>
        </div>
      </div>

      <br />
      <a href="/dashboard">Tilbage til dashboard</a>
    </main>
  );
}
