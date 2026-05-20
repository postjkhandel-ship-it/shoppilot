export default function AICompetitorSpy() {
  const competitors = [
    {
      name: "Competitor A",
      seo: "82/100",
      pricing: "Høj",
      ads: "Aggressive"
    },
    {
      name: "Competitor B",
      seo: "68/100",
      pricing: "Middel",
      ads: "Normal"
    }
  ];

  const recommendations = [
    "Brug stærkere trust badges end konkurrenterne",
    "Test lavere bundle-priser",
    "Tilføj mere SEO tekst på produktsider",
    "Lav bedre Meta Ads hooks"
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <div style={{ maxWidth: "1200px" }}>
        <h1>AI Competitor Spy</h1>

        <p>
          Analysér konkurrenters webshop, priser, SEO,
          annoncer og konverteringsstrategier.
        </p>

        <div style={heroCard}>
          <h2>Analyser konkurrent</h2>

          <input
            placeholder="Indsæt webshop URL (fx competitor.dk)"
            style={input}
          />

          <select style={input}>
            <option>Analyse type</option>
            <option>SEO Analyse</option>
            <option>Pris Analyse</option>
            <option>Ads Analyse</option>
            <option>Komplet analyse</option>
          </select>

          <button style={button}>
            Scan konkurrent
          </button>
        </div>

        <div style={grid}>
          <div style={card}>
            <h2>Konkurrent data</h2>

            {competitors.map((competitor) => (
              <div key={competitor.name} style={row}>
                <div>
                  <strong>{competitor.name}</strong>
                  <p>SEO Score: {competitor.seo}</p>
                  <p>Prisniveau: {competitor.pricing}</p>
                  <p>Ads: {competitor.ads}</p>
                </div>

                <button style={secondary}>
                  Se analyse
                </button>
              </div>
            ))}
          </div>

          <div style={card}>
            <h2>AI Anbefalinger</h2>

            <ul style={{ lineHeight: "2" }}>
              {recommendations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <button style={button}>
              Generér handlingsplan
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const heroCard = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "16px",
  padding: "24px",
  marginTop: "30px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  marginTop: "30px"
};

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px"
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #eee",
  padding: "16px 0"
};

const input = {
  width: "100%",
  padding: "14px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  marginBottom: "14px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "14px 18px",
  borderRadius: "12px",
  cursor: "pointer"
};

const secondary = {
  background: "#f3f4f6",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
