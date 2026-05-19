export default function Orders() {
  const orders = [
    { id: "#1001", customer: "Maria Jensen", amount: "299 kr", status: "Betalt" },
    { id: "#1002", customer: "Jonas Hansen", amount: "499 kr", status: "Sendt" },
    { id: "#1003", customer: "Sofie Lund", amount: "199 kr", status: "Ny ordre" }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Ordrer</h1>
      <p>Se og administrér ordrer fra webshoppen.</p>

      <table style={table}>
        <thead>
          <tr>
            <th style={cell}>Ordre</th>
            <th style={cell}>Kunde</th>
            <th style={cell}>Beløb</th>
            <th style={cell}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={cell}>{order.id}</td>
              <td style={cell}>{order.customer}</td>
              <td style={cell}>{order.amount}</td>
              <td style={cell}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

const table = {
  width: "100%",
  borderCollapse: "collapse",
  background: "#fff",
  marginTop: "30px",
  borderRadius: "14px",
  overflow: "hidden"
};

const cell = {
  padding: "16px",
  borderBottom: "1px solid #ddd",
  textAlign: "left"
};
