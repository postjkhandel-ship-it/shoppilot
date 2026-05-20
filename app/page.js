export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#f6f8fb", minHeight: "100vh" }}>
      <section style={{ padding: "80px 60px", background: "#111827", color: "white" }}>
        <h1 style={{ fontSize: "64px", maxWidth: "900px", margin: 0 }}>
          Byg, driv og skalér din webshop med Shoppilot
        </h1>

        <p style={{ fontSize: "22px", maxWidth: "720px", marginTop: "24px", color: "#d1d5db" }}>
          En dansk Shopify-lignende platform med webshop builder, produkter,
          ordrer, checkout, marketing, AI-værktøjer og analytics.
        </p>

        <div style={{ display: "flex", gap: "14px", marginTop: "34px" }}>
          <a href="/create-store" style={primary}>
            Start gratis
          </a>

          <a href="/dashboard" style={secondary}>
            Se dashboard
          </a>
        </div>
      </section>

      <section style={{ padding: "60px" }}>
        <h2 style={{ fontSize: "38px" }}>
          Alt du skal bruge til at drive webshop
        </h2>

        <div style={grid}>
          <div style={card}>
            <h3>Webshop Builder</h3>
            <p>Byg webshop uden kode med templates og customizer.</p>
          </div>

          <div style={card}>
            <h3>Produkter & Ordrer</h3>
            <p>Administrér produkter, kunder, lager, rabatter og ordrer.</p>
          </div>

          <div style={card}>
            <h3>AI Værktøjer</h3>
            <p>Generér produkter, annoncer, SEO, emails og creatives med AI.</p>
          </div>

          <div style={card}>
            <h3>Checkout & Betaling</h3>
            <p>Forbind Stripe, MobilePay, fragt, moms og domæner.</p>
          </div>

          <div style={card}>
            <h3>Analytics</h3>
            <p>Følg salg, konvertering, trafik og rapporter.</p>
          </div>

          <div style={card}>
            <h3>Marketplace</h3>
            <p>Installer apps, themes og integrationer.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const primary = {
  background: "white",
  color: "#111827",
  padding: "14px 22px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold"
};

const secondary = {
  background: "transparent",
  color: "white",
  border: "1px solid white",
  padding: "14px 22px",
  borderRadius: "12px",
  textDecoration: "none"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const card = {
  background: "white",
  border: "1px solid #ddd",
  borderRadius: "16px",
  padding: "24px"
};
