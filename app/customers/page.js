export default function Customers() {
  const customers = [
    { name: "Maria Jensen", email: "maria@email.dk", orders: 3, spent: "897 kr" },
    { name: "Jonas Hansen", email: "jonas@email.dk", orders: 1, spent: "499 kr" },
    { name: "Sofie Lund", email: "sofie@email.dk", orders: 2, spent: "398 kr" }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Kunder</h1>
      <p>Se kunder, emails og købshistorik.</p>

      <div style={{ display: "grid", gap: "18px", marginTop: "30px" }}>
        {customers.map((customer) => (
          <div key={customer.email} style={card}>
            <h2>{customer.name}</h2>
            <p>Email: {customer.email}</p>
            <p>Ordrer: {customer.orders}</p>
            <p>Brugt i alt: {customer.spent}</p>
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
