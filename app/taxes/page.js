export default function Taxes() {
  const taxRules = [
    {
      country: "Danmark",
      tax: "25%",
      status: "Aktiv"
    },
    {
      country: "Tyskland",
      tax: "19%",
      status: "Aktiv"
    },
    {
      country: "Sverige",
      tax: "25%",
      status: "Aktiv"
    },
    {
      country: "EU VAT",
      tax: "Varierer",
      status: "Aktiv"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Taxes / Moms & Skatter</h1>
      <p>Administrér momsregler og skattesatser.</p>

      <div style={card}>
        <h2>Opret momsregel</h2>

        <input
          placeholder="Land"
          style={input}
        />

        <input
          placeholder="Moms sats (fx 25%)"
          style={input}
        />

        <select style={input}>
          <option>Status</option>
          <option>Aktiv</option>
          <option>Inaktiv</option>
        </select>

        <button style={button}>
          Opret momsregel
        </button>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Momsregler
      </h2>

      <div style={{ display: "grid", gap: "16px" }}>
        {taxRules.map((rule) => (
          <div key={rule.country} style={row}>
            <div>
              <h3>{rule.country}</h3>
              <p>Moms: {rule.tax}</p>
              <p>Status: {rule.status}</p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button style={secondary}>
                Rediger
              </button>

              <button style={danger}>
                Slet
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

const danger = {
  background: "#dc2626",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
