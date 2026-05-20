export default function Reports() {
  const reports = [
    {
      title: "Omsætning i dag",
      value: "12.450 kr"
    },
    {
      title: "Ordrer",
      value: "38"
    },
    {
      title: "Top produkt",
      value: "Eksempel Produkt"
    },
    {
      title: "Nye kunder",
      value: "14"
    }
  ];

  const topProducts = [
    {
      name: "Eksempel Produkt",
      sales: 42,
      revenue: "12.558 kr"
    },
    {
      name: "Premium Produkt",
      sales: 25,
      revenue: "9.950 kr"
    },
    {
      name: "Test Produkt",
      sales: 14,
      revenue: "2.786 kr"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Reports / Rapporter</h1>
      <p>Få indsigt i salg, kunder og performance.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {reports.map((report) => (
          <div key={report.title} style={statCard}>
            <p style={{ color: "#666" }}>
              {report.title}
            </p>

            <h2 style={{ margin: 0 }}>
              {report.value}
            </h2>
          </div>
        ))}
      </div>

      <div style={tableBox}>
        <h2>Top produkter</h2>

        <table style={table}>
          <thead>
            <tr>
              <th style={cell}>Produkt</th>
              <th style={cell}>Salg</th>
              <th style={cell}>Omsætning</th>
            </tr>
          </thead>

          <tbody>
            {topProducts.map((product) => (
              <tr key={product.name}>
                <td style={cell}>{product.name}</td>
                <td style={cell}>{product.sales}</td>
                <td style={cell}>{product.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

const statCard = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "20px"
};

const tableBox = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px",
  marginTop: "40px"
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px"
};

const cell = {
  padding: "14px",
  borderBottom: "1px solid #ddd",
  textAlign: "left"
};
