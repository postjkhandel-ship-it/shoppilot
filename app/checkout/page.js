export default function Checkout() {
  const gateways = [
    { name: "Stripe", text: "Modtag kortbetalinger, Apple Pay og Google Pay.", status: "Ikke forbundet" },
    { name: "MobilePay", text: "Gør det nemt for danske kunder at betale.", status: "Kommer snart" },
    { name: "PayPal", text: "Tilbyd PayPal som ekstra betalingsmulighed.", status: "Ikke forbundet" }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Checkout & Betaling</h1>
      <p>Forbind betalingsløsninger til webshoppen.</p>

      <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
        {gateways.map((gateway) => (
          <div key={gateway.name} style={card}>
            <div>
              <h2>{gateway.name}</h2>
              <p>{gateway.text}</p>
              <p>Status: {gateway.status}</p>
            </div>

            <button style={button}>Forbind</button>
          </div>
        ))}
      </div>
    </main>
  );
}

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
