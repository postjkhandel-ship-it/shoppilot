export default function AIEmailGenerator() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <div style={{ maxWidth: "1100px" }}>
        <h1>AI Email Flow Generator</h1>

        <p>
          Generér email flows automatisk — welcome flows,
          abandoned cart, post-purchase, winback og kampagner.
        </p>

        <div style={layout}>
          <div style={card}>
            <h2>Email Input</h2>

            <textarea
              placeholder="Fx: Beauty webshop med premium branding og abandoned cart flow"
              style={textarea}
            />

            <select style={input}>
              <option>Flow type</option>
              <option>Welcome Flow</option>
              <option>Abandoned Cart</option>
              <option>Post Purchase</option>
              <option>Winback Flow</option>
              <option>Campaign Email</option>
            </select>

            <select style={input}>
              <option>Brand stil</option>
              <option>Premium</option>
              <option>Luxury</option>
              <option>High Conversion</option>
              <option>Minimalistisk</option>
            </select>

            <select style={input}>
              <option>Sprog</option>
              <option>Dansk</option>
              <option>Engelsk</option>
            </select>

            <button style={button}>
              Generér email flow med AI
            </button>
          </div>

          <div style={card}>
            <h2>AI Resultat</h2>

            <div style={resultBox}>
              <h3>Email 1 — Abandoned Cart</h3>

              <strong>Emnelinje:</strong>
              <p>Du glemte noget i kurven 👀</p>

              <strong>Email tekst:</strong>
              <p>
                Hej! Vi gemte din kurv til dig.
                Gennemfør dit køb i dag og få glæde af dit produkt.
              </p>

              <hr />

              <h3>Email 2 — Reminder</h3>

              <strong>Emnelinje:</strong>
              <p>Sidste chance før din kurv forsvinder</p>

              <strong>Email tekst:</strong>
              <p>
                Din kurv venter stadig — bestil nu før produktet er væk.
              </p>

              <hr />

              <h3>Email 3 — Discount Recovery</h3>

              <strong>Emnelinje:</strong>
              <p>Her er 10% rabat på dit køb</p>

              <strong>Email tekst:</strong>
              <p>
                Brug koden SAVE10 og gennemfør dit køb i dag.
              </p>
            </div>

            <button style={secondary}>
              Gem email flow
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
