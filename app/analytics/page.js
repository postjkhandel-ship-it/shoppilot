export default function Analytics() {
  const stats = [
    { title: "Omsætning", value: "12.450 kr" },
    { title: "Ordrer", value: "38" },
    { title: "Konverteringsrate", value: "2,8%" },
    { title: "Besøgende", value: "1.240" }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Analytics</h1>
      <p>Følg performance for din webshop.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {stats.map((stat) => (
          <div key={stat.title} style={card}>
            <p style={{ color: "#666", marginBottom: "10px" }}>
              {stat.title}
            </p>

            <h2 style={{ margin: 0 }}>
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      <div style={chartBox}>
        <h2>Salg sidste 30 dage</h2>

        <div style={chart}>
          <div style={{ ...bar, height: "90px" }} />
          <div style={{ ...bar, height: "130px" }} />
          <div style={{ ...bar, height: "110px" }} />
          <div style={{ ...bar, height: "170px" }} />
          <div style={{ ...bar, height: "140px" }} />
          <div style={{ ...bar, height: "220px" }} />
        </div>
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

const chartBox = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "30px",
  marginTop: "40px"
};

const chart = {
  display: "flex",
  alignItems: "end",
  gap: "12px",
  height: "250px",
  marginTop: "30px"
};

const bar = {
  flex: 1,
  background: "#111827",
  borderRadius: "10px 10px 0 0"
};
