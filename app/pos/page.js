export default function POS() {
  const cart = [
    {
      name: "Eksempel Produkt",
      qty: 1,
      price: "299 kr"
    },
    {
      name: "Premium Produkt",
      qty: 2,
      price: "998 kr"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>POS / Kassesystem</h1>
      <p>Tag imod betalinger i fysisk butik.</p>

      <div style={layout}>
        <div style={productsBox}>
          <h2>Produkter</h2>

          <div style={productGrid}>
            <button style={product}>
              Eksempel Produkt
              <span>299 kr</span>
            </button>

            <button style={product}>
              Premium Produkt
              <span>499 kr</span>
            </button>

            <button style={product}>
              Test Produkt
              <span>199 kr</span>
            </button>
          </div>
        </div>

        <div style={checkoutBox}>
          <h2>Kurv</h2>

          {cart.map((item) => (
            <div key={item.name} style={cartRow}>
              <div>
                <strong>{item.name}</strong>
                <p>Antal: {item.qty}</p>
              </div>

              <strong>{item.price}</strong>
            </div>
          ))}

          <hr />

          <h2>Total: 1.297 kr</h2>

          <div style={{ display: "grid", gap: "12px" }}>
            <button style={payButton}>
              Betal med kort
            </button>

            <button style={secondary}>
              MobilePay
            </button>

            <button style={secondary}>
              Kontant
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const layout = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "24px",
  marginTop: "30px"
};

const productsBox = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px"
};

const checkoutBox = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px",
  height: "fit-content"
};

const productGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "16px",
  marginTop: "20px"
};

const product = {
  background: "#f8fafc",
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "30px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  fontWeight: "bold"
};

const cartRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "18px"
};

const payButton = {
  background: "#16a34a",
  color: "white",
  border: "none",
  padding: "16px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold"
};

const secondary = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "14px",
  borderRadius: "12px",
  cursor: "pointer"
};
