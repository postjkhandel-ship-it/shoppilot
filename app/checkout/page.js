export default function Checkout() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Checkout & Betaling</h1>
      <p>Her kan webshop-ejeren forbinde betalinger.</p>

      <div style={{ display: "grid", gap: "20px", maxWidth: "700px", marginTop: "30px" }}>
        <div style={card}>
          <h2>Stripe</h2>
          <p>Tag imod kortbetalinger globalt.</p>
          <button style={button}>Forbind Stripe</button>
        </div>

        <div style={card}>
          <h2>MobilePay</h2>
          <p>Modtag betalinger via MobilePay.</p>
          <button style={button}>Forbind MobilePay</button>
        </div>

        <div style={card}>
          <h2>PayPal</h2>
          <p>Aktivér PayPal checkout.</p>
          <button style={button}>Forbind PayPal</button>
        </div>
      </div>

      <br />
      <a href="/dashboard">Tilbage til dashboard</a>
    </main>
  );
}

const card = {
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "20px",
  background: "#fff"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
