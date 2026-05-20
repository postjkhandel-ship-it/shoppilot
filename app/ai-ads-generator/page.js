export default function AIAdsGenerator() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <div style={{ maxWidth: "1100px" }}>
        <h1>AI Ads Generator</h1>

        <p>
          Beskriv dit produkt — så genererer AI Meta Ads,
          Google Ads, hooks, headlines og creative ideer.
        </p>

        <div style={layout}>
          <div style={card}>
            <h2>Annonce Input</h2>

            <textarea
              placeholder="Fx: Elektrisk tandbørste med ultralyd teknologi til renere tænder og hvidere smil"
              style={textarea}
            />

            <select style={input}>
              <option>Platform</option>
              <option>Facebook Ads</option>
              <option>Instagram Ads</option>
              <option>Google Ads</option>
              <option>TikTok Ads</option>
            </select>

            <select style={input}>
              <option>Mål</option>
              <option>Flere salg</option>
              <option>Leads</option>
              <option>Trafik</option>
              <option>Brand awareness</option>
            </select>

            <select style={input}>
              <option>Annonce stil</option>
              <option>High Conversion</option>
              <option>UGC / iPhone style</option>
              <option>Luxury</option>
              <option>Premium brand</option>
            </select>

            <button style={button}>
              Generér annoncer med AI
            </button>
          </div>

          <div style={card}>
            <h2>AI Resultat</h2>

            <div style={resultBox}>
              <h3>Hook</h3>
              <p>
                Stop med at børste forkert — få renere tænder på få minutter.
              </p>

              <h3>Primary Text</h3>
              <p>
                Oplev en dybere tandrensning med ultralyd teknologi.
                Reducér plak og få et sundere smil hjemmefra.
              </p>

              <h3>Headline</h3>
              <p>Få et renere smil i dag</p>

              <h3>CTA</h3>
              <p>Køb nu</p>

              <h3>Creative idé</h3>
              <p>
                UGC iPhone-video med før/efter og hurtig demonstration.
              </p>

              <h3>Google Ads Headlines</h3>
              <ul>
                <li>Elektrisk Tandbørste Tilbud</li>
                <li>Ultralyd Tandbørste Online</li>
                <li>Få Renere Tænder Hurtigt</li>
              </ul>
            </div>

            <button style={secondary}>
              Gem annonce
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const layout = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "24px",
  marginTop: "30px"
};

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px"
};

const textarea = {
  width: "100%",
  minHeight: "180px",
  padding: "16px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  marginBottom: "16px"
};

const input = {
  width: "100%",
  padding: "14px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  marginBottom: "14px"
};

const resultBox = {
  background: "#f8fafc",
  borderRadius: "12px",
  padding: "20px",
  display: "grid",
  gap: "10px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "16px 20px",
  borderRadius: "12px",
  cursor: "pointer",
  width: "100%"
};

const secondary = {
  background: "#16a34a",
  color: "white",
  border: "none",
  padding: "14px 18px",
  borderRadius: "12px",
  cursor: "pointer",
  marginTop: "20px"
};
