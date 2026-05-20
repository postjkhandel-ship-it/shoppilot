export default function Inventory() {
  const inventory = [
    {
      id: 1,
      name: "Eksempel Produkt",
      sku: "SKU-1001",
      stock: 24,
      status: "På lager"
    },
    {
      id: 2,
      name: "Premium Produkt",
      sku: "SKU-1002",
      stock: 5,
      status: "Lav lager"
    },
    {
      id: 3,
      name: "Test Produkt",
      sku: "SKU-1003",
      stock: 0,
      status: "Udsolgt"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Inventory / Lagerstyring</h1>
      <p>Administrér lagerstatus og antal på produkter.</p>

      <div style={{ marginTop: "30px" }}>
        <table style={table}>
          <thead>
            <tr>
              <th style={cell}>Produkt</th>
              <th style={cell}>SKU</th>
              <th style={cell}>Lager</th>
              <th style={cell}>Status</th>
              <th style={cell}>Handling</th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td style={cell}>{item.name}</td>
                <td style={cell}>{item.sku}</td>
                <td style={cell}>
                  <input
                    defaultValue={item.stock}
                    style={stockInput}
                  />
                </td>
                <td style={cell}>
                  <span style={badge(item.status)}>
                    {item.status}
                  </span>
                </td>
                <td style={cell}>
                  <button style={button}>
                    Gem
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

const table = {
  width: "100%",
  borderCollapse: "collapse",
  background: "#fff",
  borderRadius: "14px",
  overflow: "hidden"
};

const cell = {
  padding: "16px",
  borderBottom: "1px solid #ddd",
  textAlign: "left"
};

const stockInput = {
  width: "80px",
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "8px"
};

const badge = (status) => ({
  background:
    status === "På lager"
      ? "#16a34a"
      : status === "Lav lager"
      ? "#f59e0b"
      : "#dc2626",
  color: "white",
  padding: "8px 12px",
  borderRadius: "999px",
  fontSize: "12px"
});

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "10px 14px",
  borderRadius: "10px",
  cursor: "pointer"
};
