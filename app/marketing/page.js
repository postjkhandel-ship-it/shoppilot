export default function Marketing() {
  const campaigns = [
    {
      name: "Velkomst Email",
      type: "Email automation",
      status: "Aktiv"
    },
    {
      name: "Abandoned Cart",
      type: "Recovery flow",
      status: "Aktiv"
    },
    {
      name: "Facebook Pixel",
      type: "Tracking",
      status: "Ikke forbundet"
    },
    {
      name: "Google Ads Tracking",
      type: "Tracking",
      status: "Ikke forbundet"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Marketing</h1>
      <p>Administrér kampagner, tracking og email flows.</p>

      <div style={{ display: "grid", gap: "16px", marginTop: "30px" }}>
        {campaigns.map((campaign) => (
          <div key={campaign.name} style={card}>
            <div>
              <h2>{campaign.name}</h2>
              <p>{campaign.type}</p>
              <p>Status: {campaign.status}</p>
            </div>

            <button style={button}>
              Administrér
            </button>
          </div>
        ))}
      </div>

      <div style={box}>
        <h2>Tracking</h2>

        <input
          placeholder="Facebook Pixel ID"
          style={input}
        />

        <input
          placeholder="Google Ads Conversion ID"
          style={input}
        />

        <button style={button}>
          Gem tracking
        </button>
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

const box = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px",
  marginTop: "40px",
  maxWidth: "700px"
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
