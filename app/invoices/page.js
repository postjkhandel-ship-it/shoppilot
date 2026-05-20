export default function Invoices() {
  const invoices = [
    {
      id: "INV-1001",
      customer: "Maria Jensen",
      amount: "299 kr",
      status: "Betalt"
    },
    {
      id: "INV-1002",
      customer: "Jonas Hansen",
      amount: "499 kr",
      status: "Afventer"
    },
    {
      id: "INV-1003",
      customer: "Sofie Lund",
      amount: "199 kr",
      status: "Mislykket"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>
          <h1>Invoices / Fakturaer</h1>
          <p>Administrér betalinger og fakturaer.</p>
        </div>

        <button style={button}>
          + Opret faktura
        </button>
      </div>

      <div style={{ display: "grid", gap: "16px", marginTop: "30px" }}>
        {invoices.map((invoice) => (
          <div key={invoice.id} style={card}>
            <div>
              <h2>{invoice.id}</h2>
              <p>Kunde: {invoice.customer}</p>
              <p>Beløb: {invoice.amount}</p>

              <span style={badge(invoice.status)}>
                {invoice.status}
              </span>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button style={secondary}>
                Se faktura
              </button>

              <button style={button}>
                Send igen
              </button>
            </div>
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
  padding: "22px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const badge = (status) => ({
  background:
    status === "Betalt"
      ? "#16a34a"
      : status === "Afventer"
      ? "#f59e0b"
      : "#dc2626",
  color: "white",
  padding: "8px 12px",
  borderRadius: "999px",
  fontSize: "12px"
});

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};

const secondary = {
  background: "#f3f4f6",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
