export default function AIStoreManager() {
  const insights = [
    {
      title: "Lav conversion rate",
      text: "Tilføj trust badges og stærkere CTA på produktsider.",
      type: "CRO"
    },
    {
      title: "SEO mulighed",
      text: "5 produkter mangler meta beskrivelser.",
      type: "SEO"
    },
    {
      title: "Facebook Ads",
      text: "CTR er lav. Test nye hooks og creatives.",
      type: "Marketing"
    },
    {
      title: "Abandoned carts",
      text: "Opsæt recovery email flow for flere køb.",
      type: "Revenue"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <div style={{ maxWidth: "1200px" }}>
        <div style={hero}>
          <div>
            <h1>AI Store Manager</h1>
            <p>
              Din AI-assistent analyserer webshoppen og giver konkrete
              forslag til flere salg, bedre SEO og højere konvertering.
            </p>
          </div>

          <button style={button}>
            Scan webshop
          </button>
        </div>

        <div style={statsGrid}>
          <div style={statCard}>
            <p>Conversion Rate</p>
            <h2>2.9%</h2>
          </div>

          <div style={statCard}>
            <p>SEO Score</p>
            <h2>78/100</h2>
          </div>

          <div style={statCard}>
            <p>Ad Performance</p>
            <h2>Middel</h2>
          </div>

          <div style={statCard}>
            <p>Revenue Score</p>
            <h2>84/100</h2>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h2>AI Anbefalinger</h2>

          <div style={grid}>
            {insights.map((item, index) => (
              <div key={index} style={card}>
                <span style={badge(item.type)}>
                  {item.type}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <button style={secondary}>
                  Løs problem
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={reportBox}>
          <h2>AI Handlingsplan</h2>

          <ol>
            <li>Tilføj abandoned cart emails</li>
            <li>Optimér produktsider med trust badges</li>
            <li>Generér nye Meta Ads creatives</li>
            <li>Tilføj SEO titler til alle produkter</li>
            <li>Test høj-konverterende checkout</li>
          </ol>
        </div>
      </div>
    </main>
  );
}

const hero = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "18px",
  padding: "30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "20px",
  marginTop: "30px"
};

const statCard = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "20px",
  marginTop: "20px"
};

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const reportBox = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px",
  marginTop: "40px"
};

const badge = (type) => ({
  background:
    type === "SEO"
      ? "#2563eb"
      : type === "CRO"
      ? "#16a34a"
      : type === "Marketing"
      ? "#7c3aed"
      : "#f59e0b",
  color: "white",
  padding: "8px 12px",
  borderRadius: "999px",
  width: "fit-content",
  fontSize: "12px"
});

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "16px 20px",
  borderRadius: "12px",
  cursor: "pointer"
};

const secondary = {
  background: "#f3f4f6",
  border: "none",
  padding: "12px 18px",
  borderRadius: "12px",
  cursor: "pointer"
};
