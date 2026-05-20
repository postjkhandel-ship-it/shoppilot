export default function AISEOGenerator() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <div style={{ maxWidth: "1100px" }}>
        <h1>AI SEO Generator</h1>

        <p>
          Generér SEO produkttekster, blogindlæg, meta titler,
          meta beskrivelser og kategoritekster automatisk.
        </p>

        <div style={layout}>
          <div style={card}>
            <h2>SEO Input</h2>

            <textarea
              placeholder="Fx: Waterflosser til tandrensning med premium design og bedre mundhygiejne"
              style={textarea}
            />

            <select style={input}>
              <option>SEO type</option>
              <option>Produkt SEO</option>
              <option>Blogindlæg</option>
              <option>Kategori SEO</option>
              <option>Meta title</option>
              <option>Meta description</option>
            </select>

            <select style={input}>
              <option>Sprog</option>
              <option>Dansk</option>
              <option>Engelsk</option>
              <option>Svensk</option>
              <option>Tysk</option>
            </select>

            <select style={input}>
              <option>SEO stil</option>
              <option>High Ranking</option>
              <option>High Conversion</option>
              <option>Premium Brand</option>
            </select>

            <button style={button}>
              Generér SEO med AI
            </button>
          </div>

          <div style={card}>
            <h2>AI Resultat</h2>

            <div style={resultBox}>
              <h3>SEO Titel</h3>
              <p>
                Waterflosser Pro | Dybere Tandrensning & Sundere Smil
              </p>

              <h3>Meta Beskrivelse</h3>
              <p>
                Oplev effektiv tandrensning med Waterflosser Pro.
                Reducér plak og få sundere tandkød hjemmefra.
              </p>

              <h3>SEO Produkttekst</h3>
              <p>
                Waterflosser Pro hjælper med dybere rengøring mellem tænderne
                og bidrager til bedre mundhygiejne. Perfekt til daglig brug
                og sundere tandkød.
              </p>

              <h3>Blog Idé</h3>
              <p>
                “5 grunde til at bruge waterflosser hver dag”
              </p>

              <h3>Fokus søgeord</h3>
              <ul>
                <li>waterflosser</li>
                <li>mundhygiejne</li>
                <li>tandrensning hjemme</li>
              </ul>
            </div>

            <button style={secondary}>
              Gem SEO
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
