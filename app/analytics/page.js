export default function Analytics() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Analytics</h1>
      <p>Følg salg, ordrer og konverteringer.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "20px", marginTop: "30px" }}>
        <div style={card}>
          <h2>12.450 kr</h2>
          <p>Omsætning</p>
        </div>

        <div style={card}>
          <h2>38</h2>
          <p>Ordrer</p>
        </div>

        <div style={card}>
          <h2>2,8%</h2>
          <p>Konverteringsrate</p>
        </div>

        <div style={card}>
          <h2>1.240</h2>
          <p>Besøgende</p>
        </div>
      </div>

      <br />
      <a href="/dashboard">Tilbage til dashboard</a>
    </main>
  );
}

const card = {
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "20px",
  background: "#fff"
};
