export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#f6f8fb", minHeight: "100vh" }}>
      <section style={{ padding: "90px 60px", background: "#111827", color: "white" }}>
        <p style={badge}>Dansk webshop-platform</p>

        <h1 style={{ fontSize: "64px", maxWidth: "900px", margin: "20px 0" }}>
          Byg din webshop på få minutter — uden kode
        </h1>

        <p style={{ fontSize: "22px", maxWidth: "720px", color: "#d1d5db", lineHeight: "1.6" }}>
          Shoppilot hjælper virksomheder med at oprette, drive og vækste en webshop med produkter,
          ordrer, checkout, marketing, AI-værktøjer og analytics samlet ét sted.
        </p>

        <div style={{ display: "flex", gap: "14px", marginTop: "32px" }}>
          <a href="/create-store" style={primary}>Start din webshop</a>
          <a href="/dashboard" style={secondary}>Se demo</a>
        </div>
      </section>

      <section style={{ padding: "60px" }}>
        <h2 style={{ fontSize: "40px" }}>Alt samlet i én platform</h2>

        <div style={grid}>
          <div style={card}><h3>Webshop Builder</h3><p>Byg sider, templates og design uden teknisk viden.</p></div>
          <div style={card}><h3>Produkter & Ordrer</h3><p>Administrér varer, lager, kunder og ordreflow.</p></div>
          <div style={card}><h3>AI Værktøjer</h3><p>Generér SEO, annoncer, produkttekster og emails automatisk.</p></div>
          <div style={card}><h3>Checkout & Betaling</h3><p>Klar struktur til Stripe, MobilePay, fragt og moms.</p></div>
          <div style={card}><h3>Marketing</h3><p>Rabatkoder, abandoned carts, reviews og kampagner.</p></div>
          <div style={card}><h3>Analytics</h3><p>Følg omsætning, konvertering, trafik og performance.</p></div>
        </div>
      </section>

      <section style={{ padding: "60px", background: "white" }}>
        <h2 style={{ fontSize: "40px" }}>Perfekt til nye webshops, bureauer og iværksættere</h2>
        <p style={{ fontSize: "20px", maxWidth: "760px", color: "#555" }}>
          I stedet for at bruge flere systemer får brugeren ét samlet dashboard til at bygge,
          styre og optimere sin webshop.
        </p>

        <a href="/plans" style={darkButton}>Se priser</a>
      </section>
    </main>
  );
}

const badge = {
  display: "inline-block",
  background: "rgba(255,255,255,0.12)",
  padding: "10px 14px",
  borderRadius: "999px"
};

const primary = {
  background: "white",
  color: "#111827",
  padding: "15px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold"
};

const secondary = {
  border: "1px solid white",
  color: "white",
  padding: "15px 24px",
  borderRadius: "12px",
  textDecoration: "none"
};

const darkButton = {
  display: "inline-block",
  background: "#111827",
  color: "white",
  padding: "15px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  marginTop: "24px"
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
