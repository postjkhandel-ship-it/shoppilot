export default function Support() {
  const tickets = [
    { title: "Betaling virker ikke", status: "Åben" },
    { title: "Domæne skal forbindes", status: "I gang" },
    { title: "Produktbilleder loader ikke", status: "Løst" }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Support</h1>
      <p>Få hjælp til webshop, betalinger, domæne og opsætning.</p>

      <div style={card}>
        <h2>Opret supportsag</h2>

        <input placeholder="Emne" style={input} />
        <textarea placeholder="Beskriv problemet" style={{ ...input, minHeight: "120px" }} />

        <button style={button}>Send supportsag</button>
      </div>

      <h2 style={{ marginTop: "35px" }}>Dine supportsager</h2>

      <div style={{ display: "grid", gap: "12px" }}>
        {tickets.map((ticket) => (
          <div key={ticket.title} style={row}>
            <strong>{ticket.title}</strong>
            <span>{ticket.status}</span>
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
  maxWidth: "700px",
  marginTop: "30px"
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const row = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "18px",
  display: "flex",
  justifyContent: "space-between"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
