export default function Navigation() {
  const menuItems = [
    { label: "Forside", url: "/" },
    { label: "Produkter", url: "/products" },
    { label: "Kontakt", url: "/contact" },
    { label: "FAQ", url: "/faq" }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Navigation</h1>
      <p>Administrér menuer til webshoppen.</p>

      <div style={card}>
        <h2>Tilføj menu-link</h2>

        <input placeholder="Link navn" style={input} />
        <input placeholder="URL fx /products" style={input} />

        <button style={button}>Tilføj link</button>
      </div>

      <h2 style={{ marginTop: "35px" }}>Header menu</h2>

      <div style={{ display: "grid", gap: "12px" }}>
        {menuItems.map((item) => (
          <div key={item.label} style={menuItem}>
            <div>
              <strong>{item.label}</strong>
              <p>{item.url}</p>
            </div>

            <button style={secondary}>Rediger</button>
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
  maxWidth: "650px",
  marginTop: "30px"
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const menuItem = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "18px",
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
