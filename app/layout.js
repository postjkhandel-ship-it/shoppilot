export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body style={{ margin: 0, fontFamily: "Arial", background: "#f6f8fb" }}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <aside
            style={{
              width: "260px",
              background: "#111827",
              color: "white",
              padding: "24px",
              position: "fixed",
              height: "100vh",
              overflowY: "auto"
            }}
          >
            <h2>Shoppilot</h2>

            <nav style={{ display: "grid", gap: "10px", marginTop: "30px" }}>
              <a style={link} href="/">Forside</a>
              <a style={link} href="/admin">Admin Panel</a>
              <a style={link} href="/stores">Mine Webshops</a>
              <a style={link} href="/create-store">Opret Webshop</a>
              <a style={link} href="/dashboard">Dashboard</a>
              <a style={link} href="/builder">Builder</a>
              <a style={link} href="/theme-editor">Theme Editor</a>
              <a style={link} href="/customizer">Customizer</a>
              <a style={link} href="/templates">Templates</a>
              <a style={link} href="/pages">Sider</a>
              <a style={link} href="/navigation">Navigation</a>
              <a style={link} href="/products">Produkter</a>
              <a style={link} href="/orders">Ordrer</a>
              <a style={link} href="/customers">Kunder</a>
              <a style={link} href="/analytics">Analytics</a>
              <a style={link} href="/discounts">Rabatkoder</a>
              <a style={link} href="/marketing">Marketing</a>
              <a style={link} href="/apps">Apps</a>
              <a style={link} href="/checkout">Checkout</a>
              <a style={link} href="/plans">Abonnementer</a>
              <a style={link} href="/notifications">Notifikationer</a>
              <a style={link} href="/support">Support</a>
              <a style={link} href="/account">Min konto</a>
              <a style={link} href="/settings">Indstillinger</a>
              <a style={link} href="/store">Webshop Preview</a>
            </nav>
          </aside>

          <main style={{ marginLeft: "260px", width: "100%" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  padding: "10px 12px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.06)"
};
