export default function Pages() {
  const pages = [
    {
      name: "Forside",
      status: "Aktiv"
    },
    {
      name: "Produktside",
      status: "Aktiv"
    },
    {
      name: "Kontakt",
      status: "Kladde"
    },
    {
      name: "FAQ",
      status: "Aktiv"
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
          <h1>Sider</h1>
          <p>Administrér webshop-sider.</p>
        </div>

        <button style={button}>
          + Opret side
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gap: "18px",
          marginTop: "30px"
        }}
      >
        {pages.map((page) => (
          <div key={page.name} style={card}>
            <div>
              <h2>{page.name}</h2>
              <p>Status: {page.status}</p>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
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
  padding: "22px",
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
