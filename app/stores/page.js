export default function Stores() {
  const stores = [
    {
      name: "Nordic Fashion",
      url: "nordicfashion.shoppilot.shop",
      status: "Live"
    },
    {
      name: "Beauty House",
      url: "beautyhouse.shoppilot.shop",
      status: "Kladde"
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
          <h1>Mine Webshops</h1>
          <p>Administrér alle dine webshops.</p>
        </div>

        <a href="/create-store" style={button}>
          + Opret webshop
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {stores.map((store) => (
          <div key={store.name} style={card}>
            <div>
              <h2>{store.name}</h2>
              <p>{store.url}</p>
              <p>Status: {store.status}</p>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <a href="/dashboard" style={secondary}>
                Administrér
              </a>

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
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const button = {
  background: "#111827",
  color: "white",
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: "10px"
};

const secondary = {
  background: "#f3f4f6",
  color: "#111",
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: "10px"
};

const danger = {
  background: "#dc2626",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
