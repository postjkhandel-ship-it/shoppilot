export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial",
        background: "#f5f7fb",
        minHeight: "100vh",
        padding: "60px"
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "80px"
        }}
      >
        <h2>Shoppilot</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/login">Log ind</a>
          <a href="/dashboard">Dashboard</a>
        </div>
      </nav>

      <div style={{ maxWidth: "700px" }}>
        <h1 style={{ fontSize: "58px", marginBottom: "20px" }}>
          Byg og driv din egen webshop
        </h1>

        <p style={{ fontSize: "22px", color: "#555" }}>
          Shoppilot gør det nemt at bygge, drive og skalere en webshop
          uden kode.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
          <a href="/builder" style={button}>
            Start webshop
          </a>

          <a href="/login" style={secondary}>
            Log ind
          </a>
        </div>
      </div>
    </main>
  );
}

const button = {
  background: "#111827",
  color: "white",
  padding: "14px 22px",
  borderRadius: "12px",
  textDecoration: "none"
};

const secondary = {
  border: "1px solid #ddd",
  padding: "14px 22px",
  borderRadius: "12px",
  textDecoration: "none",
  color: "#111"
};
