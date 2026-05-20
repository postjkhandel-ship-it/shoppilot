export default function Domains() {
  const domains = [
    {
      domain: "minshop.dk",
      status: "Forbundet"
    },
    {
      domain: "beautybrand.dk",
      status: "Afventer DNS"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Domains / Domæner</h1>
      <p>Forbind eget domæne til webshoppen.</p>

      <div style={card}>
        <h2>Tilføj domæne</h2>

        <input
          placeholder="fx minshop.dk"
          style={input}
        />

        <button style={button}>
          Forbind domæne
        </button>

        <div style={dnsBox}>
          <h3>DNS opsætning</h3>
          <p><strong>A Record:</strong> 76.76.21.21</p>
          <p><strong>CNAME:</strong> www → cname.shoppilot.app</p>
        </div>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Dine domæner
      </h2>

      <div style={{ display: "grid", gap: "16px" }}>
        {domains.map((domain) => (
          <div key={domain.domain} style={row}>
            <div>
              <h3>{domain.domain}</h3>
              <p>Status: {domain.status}</p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button style={secondary}>
                DNS Guide
              </button>

              <button style={danger}>
                Fjern
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

const dnsBox = {
  background: "#f8fafc",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "16px",
  marginTop: "20px"
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
