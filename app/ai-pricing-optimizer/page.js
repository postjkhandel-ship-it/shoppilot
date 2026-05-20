export default function AIPricingOptimizer() {
  const products = [
    {
      name: "Eksempel Produkt",
      currentPrice: "299 kr",
      suggestedPrice: "349 kr",
      margin: "62%",
      reason: "Høj efterspørgsel og god margin"
    },
    {
      name: "Premium Produkt",
      currentPrice: "499 kr",
      suggestedPrice: "549 kr",
      margin: "68%",
      reason: "Kan positioneres som premium"
    },
    {
      name: "Test Produkt",
      currentPrice: "199 kr",
      suggestedPrice: "179 kr",
      margin: "44%",
      reason: "Lavere pris kan øge konvertering"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>AI Pricing Optimizer</h1>
      <p>Optimer priser, margin og tilbud automatisk.</p>

      <div style={card}>
        <h2>Pris analyse</h2>

        <input placeholder="Produktnavn" style={input} />
        <input placeholder="Indkøbspris" style={input} />
        <input placeholder="Nuværende salgspris" style={input} />

        <button style={button}>Analyser pris</button>
      </div>

      <h2 style={{ marginTop: "40px" }}>AI prisforslag</h2>

      <div style={{ display: "grid", gap: "16px" }}>
        {products.map((product) => (
          <div key={product.name} style={row}>
            <div>
              <h3>{product.name}</h3>
              <p>Nuværende pris: {product.currentPrice}</p>
              <p>AI foreslået pris: {product.suggestedPrice}</p>
              <p>Margin: {product.margin}</p>
              <p>{product.reason}</p>
            </div>

            <button style={button}>Brug pris</button>
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
  padding: "24px",
  maxWidth: "700px",
  marginTop: "30px"
};

const row = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "22px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
