export default function AbandonedCarts() {
  const carts = [
    {
      id: "CART-1001",
      customer: "Maria Jensen",
      email: "maria@email.dk",
      value: "699 kr",
      time: "2 timer siden"
    },
    {
      id: "CART-1002",
      customer: "Jonas Hansen",
      email: "jonas@email.dk",
      value: "299 kr",
      time: "5 timer siden"
    },
    {
      id: "CART-1003",
      customer: "Sofie Lund",
      email: "sofie@email.dk",
      value: "1.299 kr",
      time: "1 dag siden"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>
          <h1>Abandoned Carts / Forladte Kurve</h1>
          <p>Gendan mistede salg og send recovery emails.</p>
        </div>

        <button style={button}>
          Send recovery emails
        </button>
      </div>

      <div style={{ display: "grid", gap: "18px", marginTop: "30px" }}>
        {carts.map((cart) => (
          <div key={cart.id} style={card}>
            <div>
              <h2>{cart.customer}</h2>
              <p>Email: {cart.email}</p>
              <p>Kurv værdi: {cart.value}</p>
              <p>Forladt: {cart.time}</p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button style={secondary}>
                Se kurv
              </button>

              <button style={button}>
                Send email
              </button>
            </div>
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
  padding: "22px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};

const secondary = {
  background: "#f3f4f6",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
