export default function Customers() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Kunder</h1>
      <p>Her kan du se kunder, email og ordrestatus.</p>

      <div style={{ marginTop: "30px", display: "grid", gap: "15px" }}>
        <div style={card}>
          <h3>Maria Jensen</h3>
          <p>Email: maria@email.dk</p>
          <p>Ordrer: 3</p>
        </div>

        <div style={card}>
          <h3>Jonas Hansen</h3>
          <p>Email: jonas@email.dk</p>
          <p>Ordrer: 1</p>
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
  padding: "20px"
};
