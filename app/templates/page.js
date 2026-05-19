export default function Templates() {
  const templates = [
    { name: "Fashion", text: "Perfekt til tøj og accessories" },
    { name: "Beauty", text: "Perfekt til beauty og hudpleje" },
    { name: "Elektronik", text: "Perfekt til gadgets og tech" },
    { name: "Digital Products", text: "Perfekt til digitale produkter" }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Templates</h1>
      <p>Vælg et design til webshoppen.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "20px", marginTop: "30px" }}>
        {templates.map((template) => (
          <div key={template.name} style={card}>
            <div style={preview}>Preview</div>
            <h2>{template.name}</h2>
            <p>{template.text}</p>
            <button style={button}>Vælg template</button>
          </div>
        ))}
      </div>
    </main>
  );
}

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "20px"
};

const preview = {
  height: "160px",
  background: "#f1f5f9",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "15px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
