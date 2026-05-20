export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#f8fafc", color: "#0f172a" }}>
      <section style={hero}>
        <nav style={nav}>
          <h2 style={{ margin: 0 }}>Shoppilot</h2>
          <div style={{ display: "flex", gap: "14px" }}>
            <a href="/login" style={navLink}>Log ind</a>
            <a href="/create-store" style={navButton}>Start gratis</a>
          </div>
        </nav>

        <div style={heroGrid}>
          <div>
            <div style={badge}>Webshop-platform til moderne virksomheder</div>

            <h1 style={headline}>
              Byg en professionel webshop uden kode
            </h1>

            <p style={subtext}>
              Shoppilot samler webshop-builder, produkter, checkout, marketing,
              AI-værktøjer og analytics i ét enkelt dashboard.
            </p>

            <div style={ctaRow}>
              <a href="/create-store" style={primary}>Start din webshop</a>
              <a href="/dashboard" style={secondary}>Se demo</a>
            </div>

            <div style={trustRow}>
              <span>✓ Ingen teknisk erfaring</span>
              <span>✓ AI inkluderet</span>
              <span>✓ Klar til betalinger</span>
            </div>
          </div>

          <div style={mockup}>
            <div style={mockupTop}>Shoppilot Dashboard</div>
            <div style={statsGrid}>
              <div style={stat}><strong>38</strong><span>Ordrer</span></div>
              <div style={stat}><strong>12.450 kr</strong><span>Omsætning</span></div>
              <div style={stat}><strong>2.8%</strong><span>Konvertering</span></div>
            </div>
            <div style={mockCard}>AI anbefaling: Tilføj abandoned cart flow</div>
            <div style={mockCard}>SEO score: 84/100</div>
            <div style={mockCard}>Checkout klar til Stripe & MobilePay</div>
          </div>
        </div>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>Alt til din webshop samlet ét sted</h2>
        <p style={sectionText}>
          Fra første produkt til første ordre — Shoppilot giver dig værktøjerne.
        </p>

        <div style={grid}>
          <div style={card}><h3>Webshop Builder</h3><p>Byg sider, design og templates uden kode.</p></div>
          <div style={card}><h3>Produkter & Lager</h3><p>Styr varer, lager, kategorier og produktdata.</p></div>
          <div style={card}><h3>Ordrer & Kunder</h3><p>Få fuldt overblik over salg, kunder og ordrestatus.</p></div>
          <div style={card}><h3>AI Værktøjer</h3><p>Generér SEO, ads, emails, produkter og creatives.</p></div>
          <div style={card}><h3>Marketing</h3><p>Rabatkoder, reviews, abandoned carts og kampagner.</p></div>
          <div style={card}><h3>Analytics</h3><p>Følg omsætning, trafik, performance og vækst.</p></div>
        </div>
      </section>

      <section style={softSection}>
        <h2 style={sectionTitle}>Fra idé til webshop på få minutter</h2>

        <div style={steps}>
          <div style={step}><strong>1</strong><h3>Opret webshop</h3><p>Vælg navn, niche og template.</p></div>
          <div style={step}><strong>2</strong><h3>Tilføj produkter</h3><p>Opret produkter manuelt eller med AI.</p></div>
          <div style={step}><strong>3</strong><h3>Gå live</h3><p>Forbind domæne, betaling og start salg.</p></div>
        </div>
      </section>

      <section style={finalSection}>
        <h2 style={finalTitle}>Klar til at bygge din webshop?</h2>
        <p style={finalText}>
          Start med Shoppilot og få én samlet platform til at drive din online forretning.
        </p>
        <a href="/create-store" style={finalButton}>Start gratis nu</a>
      </section>
    </main>
  );
}

const hero = {
  background: "linear-gradient(135deg, #eef6ff, #f8fafc)",
  padding: "28px 60px 80px"
};

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "70px"
};

const navLink = {
  color: "#0f172a",
  textDecoration: "none",
  padding: "12px 16px"
};

const navButton = {
  background: "#2563eb",
  color: "white",
  padding: "12px 18px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold"
};

const heroGrid = {
  display: "grid",
  gridTemplateColumns: "1.1fr .9fr",
  gap: "50px",
  alignItems: "center"
};

const badge = {
  display: "inline-block",
  background: "#dbeafe",
  color: "#1d4ed8",
  padding: "10px 16px",
  borderRadius: "999px",
  fontWeight: "bold",
  marginBottom: "22px"
};

const headline = {
  fontSize: "64px",
  lineHeight: "1.05",
  maxWidth: "850px",
  margin: "0 0 22px"
};

const subtext = {
  fontSize: "21px",
  lineHeight: "1.6",
  color: "#475569",
  maxWidth: "720px"
};

const ctaRow = {
  display: "flex",
  gap: "14px",
  marginTop: "30px"
};

const primary = {
  background: "#2563eb",
  color: "white",
  padding: "16px 24px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold"
};

const secondary = {
  background: "white",
  color: "#0f172a",
  border: "1px solid #cbd5e1",
  padding: "16px 24px",
  borderRadius: "14px",
  textDecoration: "none"
};

const trustRow = {
  display: "flex",
  gap: "22px",
  flexWrap: "wrap",
  marginTop: "28px",
  color: "#475569"
};

const mockup = {
  background: "white",
  border: "1px solid #dbeafe",
  borderRadius: "24px",
  padding: "24px",
  boxShadow: "0 30px 80px rgba(37,99,235,.15)"
};

const mockupTop = {
  fontWeight: "bold",
  marginBottom: "18px"
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "12px",
  marginBottom: "18px"
};

const stat = {
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "14px",
  padding: "16px",
  display: "grid",
  gap: "6px"
};

const mockCard = {
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "14px",
  padding: "16px",
  marginTop: "12px"
};

const section = {
  padding: "75px 60px",
  background: "#fff"
};

const sectionTitle = {
  fontSize: "42px",
  textAlign: "center",
  marginBottom: "12px"
};

const sectionText = {
  textAlign: "center",
  color: "#64748b",
  fontSize: "19px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
  gap: "20px",
  marginTop: "38px"
};

const card = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",
  padding: "28px",
  boxShadow: "0 18px 45px rgba(15,23,42,.05)"
};

const softSection = {
  padding: "75px 60px",
  background: "#eef6ff"
};

const steps = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
  gap: "20px",
  marginTop: "35px"
};

const step = {
  background: "white",
  border: "1px solid #dbeafe",
  borderRadius: "18px",
  padding: "28px"
};

const finalSection = {
  padding: "80px 60px",
  background: "#0f172a",
  color: "white",
  textAlign: "center"
};

const finalTitle = {
  fontSize: "44px",
  marginBottom: "14px"
};

const finalText = {
  color: "#cbd5e1",
  fontSize: "20px"
};

const finalButton = {
  display: "inline-block",
  marginTop: "28px",
  background: "#2563eb",
  color: "white",
  padding: "16px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold"
};
