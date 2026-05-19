export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body style={{ margin: 0, fontFamily: "Arial", background: "#f6f8fb" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            borderBottom: "1px solid #ddd",
            background: "#fff",
            position: "sticky",
            top: 0
          }}
        >
          <h2 style={{ margin: 0 }}>Shoppilot</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/dashboard">Dashboard</a>
            <a href="/products">Produkter</a>
            <a href="/orders">Ordrer</a>
            <a href="/builder">Builder</a>
            <a href="/analytics">Analytics</a>
            <a href="/settings">Settings</a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
