export default function Affiliate() {
  const affiliates = [
    {
      name: "Maria Jensen",
      code: "MARIA10",
      commission: "10%",
      sales: "4.250 kr",
      status: "Aktiv"
    },
    {
      name: "Jonas Hansen",
      code: "JONAS15",
      commission: "15%",
      sales: "8.120 kr",
      status: "Aktiv"
    },
    {
      name: "Sofie Lund",
      code: "SOFIE20",
      commission: "20%",
      sales: "0 kr",
      status: "Afventer"
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
          <h1>Affiliate Program</h1>
          <p>Administrér influencers og affiliate links.</p>
        </div>

        <button style={button}>
          + Tilføj affiliate
        </button>
      </div>

      <div style={card}>
        <h2>Ny affiliate</h2>

        <input
          placeholder="Navn"
          style={input}
        />

        <input
          placeholder="Affiliate kode (fx MARIA10)"
          style={input}
        />

        <input
          placeholder="Kommission (fx 10%)"
          style={input}
        />

        <button style={button}>
          Opret affiliate
        </button>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Affiliates
      </h2>

      <div style={{ display: "grid", gap: "16px" }}>
        {affiliates.map((affiliate) => (
          <div key={affiliate.code} style={row}>
            <div>
              <h3>{affiliate.name}</h3>
              <p>Kode: {affiliate.code}</p>
              <p>Kommission: {affiliate.commission}</p>
              <p>Salg: {affiliate.sales}</p>

              <span style={badge(affiliate.status)}>
                {affiliate.status}
              </span>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button style={secondary}>
                Rediger
              </button>

              <button style={button}>
                Se statistik
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
  padding: "24px",
  maxWidth: "700px",
  marginTop: "30px"
};

const row = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const badge = (status) => ({
  background:
    status === "Aktiv"
      ? "#16a34a"
      : "#f59e0b",
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
