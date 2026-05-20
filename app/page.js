export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#f6f8fb", color: "#111827" }}>
      <section style={hero}>
        <div style={badge}>Alt-i-én webshop platform</div>

        <h1 style={headline}>
          Byg, lancér og vækst din webshop — uden kode
        </h1>

        <p style={subtext}>
          Shoppilot samler webshop-builder, produkter, ordrer, checkout,
          marketing, AI-værktøjer og analytics i ét professionelt dashboard.
        </p>

        <div style={ctaRow}>
          <a href="/create-store" style={primary}>
            Start din webshop gratis
          </a>
          <a href="/dashboard" style={secondary}>
            Se platformen
          </a>
        </div>

        <div style={trustRow}>
          <span>✓ Ingen kode</span>
          <span>✓ AI-værktøjer inkluderet</span>
          <span>✓ Klar til Stripe & MobilePay</span>
        </div>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>Alt du skal bruge for at sælge online</h2>

        <div style={grid}>
          <div style={card}>
            <h3>Webshop Builder</h3>
            <p>Byg sider, produkter, templates og checkout uden teknisk erfaring.</p>
          </div>

          <div style={card}>
            <h3>AI der sparer tid</h3>
            <p>Generér produkttekster, SEO, emails, ads og creatives automatisk.</p>
          </div>

          <div style={card}>
            <h3>Ordre & kundeoverblik</h3>
            <p>Administrér ordrer, kunder, lager, rabatter og abandoned carts.</p>
          </div>
        </div>
      </section>

      <section style={darkSection}>
        <h2 style={darkTitle}>Fra idé til webshop på få minutter</h2>
        <p style={darkText}>
          Perfekt til iværksættere, bureauer og virksomheder der vil starte,
          teste og skalere webshops hurtigere.
        </p>

        <div style={steps}>
          <div style={step}>1. Opret webshop</div>
          <div style={step}>2. Tilføj produkter</div>
          <div style={step}>3. Gå live</div>
        </div>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>Vælg din plan og kom i gang</h2>
        <p style={centerText}>
          Start simpelt — opgradér når din webshop vokser.
        </p>

        <a href="/plans" style={finalCta}>
          Se abonnementer
        </a>
      </section>
    </main>
  );
}

const hero = {
  padding: "90px 60px",
  background: "linear-gradient(135deg, #111827, #1f2937)",
  color: "white"
};

const badge = {
  display: "inline-block",
  background: "rgba(255,255,255,0.12)",
  padding: "10px 16px",
  borderRadius: "999px",
  marginBottom: "24px"
};

const headline = {
  fontSize: "68px",
  lineHeight: "1.05",
  maxWidth: "980px",
  margin: "0 0 24px"
};

const subtext = {
  fontSize: "22px",
  lineHeight: "1.6",
  color: "#d1d5db",
  maxWidth: "780px"
};

const ctaRow = {
  display: "flex",
  gap: "16px",
  marginTop: "34px"
};

const primary = {
  background: "white",
  color: "#111827",
  padding: "16px 26px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold"
};

const secondary = {
  border: "1px solid rgba(255,255,255,.7)",
  color: "white",
  padding: "16px 26px",
  borderRadius: "14px",
  textDecoration: "none"
};

const trustRow = {
  display: "flex",
  gap: "24px",
  marginTop: "34px",
  color: "#e5e7eb",
  flexWrap: "wrap"
};

const section = {
  padding: "70px 60px",
  background: "#f6f8fb"
};

const sectionTitle = {
  fontSize: "42px",
  textAlign: "center",
  marginBottom: "20px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
  gap: "22px",
  marginTop: "35px"
};

const card = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: "18px",
  padding: "28px",
  boxShadow: "0 20px 50px rgba(15,23,42,.06)"
};

const darkSection = {
  padding: "75px 60px",
  background: "#111827",
  color: "white",
  textAlign: "center"
};

const darkTitle = {
  fontSize: "44px",
  marginBottom: "16px"
};

const darkText = {
  fontSize: "20px",
  color: "#d1d5db",
  maxWidth: "720px",
  margin: "0 auto"
};

const steps = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
  gap: "18px",
  marginTop: "38px"
};

const step = {
  background: "rgba(255,255,255,.08)",
  border: "1px solid rgba(255,255,255,.15)",
  padding: "22px",
  borderRadius: "16px"
};

const centerText = {
  textAlign: "center",
  fontSize: "20px",
  color: "#555"
};

const finalCta = {
  display: "block",
  width: "fit-content",
  margin: "28px auto 0",
  background: "#111827",
  color: "white",
  padding: "16px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold"
};
