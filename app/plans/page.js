export default function Plans() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Abonnementer</h1>
      <p>Vælg hvilken plan kunden skal bruge til sin webshop.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "20px", marginTop: "30px" }}>
        <div style={card}>
          <h2>Basic</h2>
          <h1>199 kr/md</h1>
          <p>Til nye webshops.</p>
          <button style={button}>Vælg Basic</button>
        </div>

        <div style={card}>
          <h2>Pro</h2>
          <h1>399 kr/md</h1>
          <p>Til webshops der vil vækste.</p>
          <button style={button}>Vælg Pro</button>
        </div>

        <div style={card}>
          <h2>Business</h2>
          <h1>799 kr/md</h1>
          <p>Til større webshops.</p>
          <button style={button}>Vælg Business</button>
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

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
