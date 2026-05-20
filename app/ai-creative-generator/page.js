export default function AICreativeGenerator() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <div style={{ maxWidth: "1100px" }}>
        <h1>AI Creative Generator</h1>

        <p>
          Generér annoncebilleder, UGC hooks, statics og creative idéer automatisk.
        </p>

        <div style={layout}>
          <div style={card}>
            <h2>Creative Input</h2>

            <textarea
              placeholder="Fx: Waterflosser til renere tænder med premium design og høj konvertering"
              style={textarea}
            />

            <select style={input}>
              <option>Creative type</option>
              <option>Facebook Static</option>
              <option>Instagram Story</option>
              <option>UGC / iPhone style</option>
              <option>Google Display</option>
              <option>TikTok Creative</option>
            </select>

            <select style={input}>
              <option>Design stil</option>
              <option>High Conversion</option>
              <option>Premium</option>
              <option>Luxury</option>
              <option>Minimalistisk</option>
              <option>UGC Style</option>
            </select>

            <select style={input}>
              <option>Mål</option>
              <option>Flere køb</option>
              <option>Retargeting</option>
              <option>Branding</option>
              <option>Lead generation</option>
            </select>

            <button style={button}>
              Generér creatives med AI
            </button>
          </div>

          <div style={card}>
            <h2>AI Resultat</h2>

            <div style={previewBox}>
              Creative Preview
            </div>

            <div style={resultBox}>
              <h3>Hook</h3>
              <p>
                Derfor skifter tusindvis til smartere tandrensning.
              </p>

              <h3>Headline</h3>
              <p>
                Få et renere smil hjemmefra
              </p>

              <h3>Creative idé</h3>
              <p>
                Før/efter visual + iPhone UGC demonstration med social proof.
              </p>

              <h3>Tekst overlay</h3>
              <p>
                “40% rabat i dag” + trust badges + stjerner.
              </p>

              <h3>Format forslag</h3>
              <ul>
                <li>1080×1080 Facebook Static</li>
                <li>1080×1920 Story</li>
                <li>UGC video storyboard</li>
              </ul>
            </div>

            <button style={secondary}>
              Gem creative
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

const previewBox = {
  height: "260px",
  background: "#f3f4f6",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px"
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
