export default function Settings() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Indstillinger</h1>
      <p>Administrér webshop, branding og forbindelser.</p>

      <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
        <div style={card}>
          <h2>Webshop Information</h2>

          <input placeholder="Webshop navn" style={input} />
          <input placeholder="Support email" style={input} />
          <input placeholder="Telefonnummer" style={input} />
        </div>

        <div style={card}>
          <h2>Branding</h2>

          <input placeholder="Primær farve (#000000)" style={input} />
          <input placeholder="Logo URL" style={input} />
          <input placeholder="Font navn" style={input} />
        </div>

        <div style={card}>
          <h2>Domæne</h2>

          <input placeholder="mitdomæne.dk" style={input} />

          <button style={button}>
            Forbind domæne
          </button>
        </div>

        <div style={card}>
          <h2>SEO</h2>

          <input placeholder="Meta title" style={input} />
          <textarea
            placeholder="Meta beskrivelse"
            style={{
              ...input,
              minHeight: "100px"
            }}
          />
        </div>

        <button style={saveButton}>
          Gem indstillinger
        </button>
      </div>
    </main>
  );
}

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px"
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};

const saveButton = {
  background: "#16a34a",
  color: "white",
  border: "none",
  padding: "16px 24px",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "16px"
};
