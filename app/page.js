export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial",
        background: "#f8fafc",
        color: "#0f172a"
      }}
    >
      {/* HERO */}
      <section style={hero}>
        <nav style={nav}>
          <h2 style={{ margin: 0 }}>
            Shoppilot
          </h2>

          <div style={{ display: "flex", gap: "14px" }}>
            <a href="/login" style={navLink}>
              Log ind
            </a>

            <a href="/create-store" style={navButton}>
              Start gratis
            </a>
          </div>
        </nav>

        <div style={heroGrid}>
          <div>
            <div style={badge}>
              Dansk webshop-platform
            </div>

            <h1 style={headline}>
              Byg en professionel webshop uden kode
            </h1>

            <p style={subtext}>
              Shoppilot samler webshop builder, produkter,
              checkout, marketing, AI-værktøjer og analytics
              i ét professionelt dashboard.
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
              <span>✓ Ingen teknisk erfaring</span>
              <span>✓ AI inkluderet</span>
              <span>✓ Klar til Stripe & MobilePay</span>
            </div>
          </div>

          <div style={mockup}>
            <div style={mockupTop}>
              Shoppilot Dashboard
            </div>

            <div style={statsGrid}>
              <div style={stat}>
                <strong>38</strong>
                <span>Ordrer</span>
              </div>

              <div style={stat}>
                <strong>12.450 kr</strong>
                <span>Omsætning</span>
              </div>

              <div style={stat}>
                <strong>2.8%</strong>
                <span>Konvertering</span>
              </div>
            </div>

            <div style={mockCard}>
              AI anbefaling: Tilføj abandoned cart flow
            </div>

            <div style={mockCard}>
              SEO score: 84/100
            </div>

            <div style={mockCard}>
              Klar til Stripe & MobilePay
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={section}>
        <h2 style={sectionTitle}>
          Alt til din webshop samlet ét sted
        </h2>

        <p style={sectionText}>
          Fra første produkt til første ordre — Shoppilot giver dig værktøjerne.
        </p>

        <div style={grid}>
          <div style={card}>
            <h3>Webshop Builder</h3>
            <p>
              Byg sider, design og templates uden kode.
            </p>
          </div>

          <div style={card}>
            <h3>Produkter & Lager</h3>
            <p>
              Styr varer, lager, kategorier og produktdata.
            </p>
          </div>

          <div style={card}>
            <h3>Ordrer & Kunder</h3>
            <p>
              Få fuldt overblik over salg, kunder og ordrestatus.
            </p>
          </div>

          <div style={card}>
            <h3>AI Værktøjer</h3>
            <p>
              Generér SEO, ads, emails, produkter og creatives.
            </p>
          </div>

          <div style={card}>
            <h3>Marketing</h3>
            <p>
              Rabatkoder, reviews, abandoned carts og kampagner.
            </p>
          </div>

          <div style={card}>
            <h3>Analytics</h3>
            <p>
              Følg omsætning, trafik og performance.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={proofSection}>
        <h2 style={sectionTitle}>
          Bygget til at få webshops hurtigere live
        </h2>

        <p style={sectionText}>
          Shoppilot hjælper virksomheder med at lancere hurtigere,
          spare tid og skalere webshoppen smartere.
        </p>

        <div style={grid}>
          <div style={card}>
            <h3>Launch hurtigere</h3>
            <p>
              Opret webshop, checkout og produkter fra ét dashboard.
            </p>
          </div>

          <div style={card}>
            <h3>Spar tid med AI</h3>
            <p>
              Få produkttekster, SEO, annoncer og emails genereret automatisk.
            </p>
          </div>

          <div style={card}>
            <h3>Skalér smartere</h3>
            <p>
              Brug analytics, rabatkoder og marketing til flere salg.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={softSection}>
        <h2 style={sectionTitle}>
          Fra idé til webshop på få minutter
        </h2>

        <div style={steps}>
          <div style={step}>
            <strong>1</strong>
            <h3>Opret webshop</h3>
            <p>Vælg niche, navn og template.</p>
          </div>

          <div style={step}>
            <strong>2</strong>
            <h3>Tilføj produkter</h3>
            <p>Tilføj manuelt eller brug AI.</p>
          </div>

          <div style={step}>
            <strong>3</strong>
            <h3>Gå live</h3>
            <p>Forbind domæne og begynd at sælge.</p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section style={comparisonSection}>
        <h2 style={sectionTitle}>
          Hvorfor vælge Shoppilot?
        </h2>

        <div style={comparisonGrid}>
          <div style={comparisonCard}>
            <h3>Uden Shoppilot</h3>
            <p>✕ Flere systemer</p>
            <p>✕ Kompliceret opsætning</p>
            <p>✕ Langsom lancering</p>
            <p>✕ Marketing tager tid</p>
          </div>

          <div style={comparisonCardHighlight}>
            <h3>Med Shoppilot</h3>
            <p>✓ Alt samlet ét sted</p>
            <p>✓ Webshop uden kode</p>
            <p>✓ AI hjælper med arbejdet</p>
            <p>✓ Klar til skalering</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={faqSection}>
        <h2 style={sectionTitle}>
          Ofte stillede spørgsmål
        </h2>

        <div style={faqBox}>
          <h3>Kan jeg bygge webshop uden kode?</h3>
          <p>
            Ja. Shoppilot er lavet til virksomheder og iværksættere uden teknisk erfaring.
          </p>

          <h3>Kan jeg bruge eget domæne?</h3>
          <p>
            Ja. Du kan forbinde dit eget domæne direkte.
          </p>

          <h3>Er AI-værktøjer inkluderet?</h3>
          <p>
            Ja. Du kan generere SEO, produkter, annoncer og emails automatisk.
          </p>

          <h3>Kan jeg styre produkter og ordrer?</h3>
          <p>
            Ja. Hele webshoppen styres fra ét dashboard.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={finalSection}>
        <h2 style={finalTitle}>
          Klar til at bygge din webshop?
        </h2>

        <p style={finalText}>
          Start gratis og få alt samlet i én professionel platform.
        </p>

        <a href="/create-store" style={finalButton}>
          Start gratis nu
        </a>
      </section>
    </main>
  );
}

const hero = {
  background: "linear-gradient(135deg,#eef6ff,#f8fafc)",
  padding: "30px 60px 90px"
};

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "70px"
};

const navLink = {
  textDecoration: "none",
  color: "#0f172a"
};

const navButton = {
  background: "#2563eb",
  color: "white",
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: "12px",
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
  marginBottom: "24px",
  fontWeight: "bold"
};

const headline = {
  fontSize: "68px",
  lineHeight: "1.05",
  margin: 0
};

const subtext = {
  fontSize: "22px",
  lineHeight: "1.7",
  color: "#475569",
  marginTop: "20px"
};

const ctaRow = {
  display: "flex",
  gap: "14px",
  marginTop: "30px"
};

const primary = {
  background: "#2563eb",
  color: "white",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "14px",
  fontWeight: "bold"
};

const secondary = {
  background: "white",
  border: "1px solid #dbeafe",
  color: "#0f172a",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "14px"
};

const trustRow = {
  display: "flex",
  gap: "20px",
  marginTop: "28px",
  color: "#475569",
  flexWrap: "wrap"
};

const mockup = {
  background: "white",
  borderRadius: "24px",
  padding: "24px",
  border: "1px solid #dbeafe",
  boxShadow: "0 30px 80px rgba(37,99,235,.12)"
};

const mockupTop = { fontWeight: "bold", marginBottom: "18px" };
const statsGrid = { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" };
const stat = { background: "#f8fafc", padding: "16px", borderRadius: "14px" };
const mockCard = { background: "#f8fafc", padding: "16px", borderRadius: "14px", marginTop: "12px" };

const section = { padding: "80px 60px", background: "white" };
const proofSection = { padding: "80px 60px", background: "#f8fafc" };
const softSection = { padding: "80px 60px", background: "#eef6ff" };
const comparisonSection = { padding: "80px 60px", background: "white" };
const faqSection = { padding: "80px 60px", background: "#eef6ff" };

const sectionTitle = { fontSize: "42px", textAlign: "center" };
const sectionText = { textAlign: "center", color: "#64748b", fontSize: "20px" };

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "20px",
  marginTop: "35px"
};

const card = {
  background: "white",
  padding: "28px",
  borderRadius: "18px",
  border: "1px solid #e2e8f0"
};

const steps = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "20px",
  marginTop: "35px"
};

const step = {
  background: "white",
  padding: "30px",
  borderRadius: "18px"
};

const comparisonGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "24px",
  marginTop: "35px"
};

const comparisonCard = {
  background: "#f8fafc",
  padding: "28px",
  borderRadius: "18px"
};

const comparisonCardHighlight = {
  background: "#eff6ff",
  padding: "28px",
  borderRadius: "18px"
};

const faqBox = {
  background: "white",
  padding: "34px",
  borderRadius: "20px",
  maxWidth: "900px",
  margin: "35px auto 0"
};

const finalSection = {
  background: "#0f172a",
  padding: "80px 60px",
  textAlign: "center",
  color: "white"
};

const finalTitle = { fontSize: "46px" };
const finalText = { color: "#cbd5e1", fontSize: "20px" };

const finalButton = {
  display: "inline-block",
  marginTop: "28px",
  background: "#2563eb",
  color: "white",
  textDecoration: "none",
  padding: "18px 28px",
  borderRadius: "14px",
  fontWeight: "bold"
};
