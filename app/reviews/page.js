export default function Reviews() {
  const reviews = [
    {
      customer: "Maria Jensen",
      product: "Eksempel Produkt",
      stars: 5,
      text: "Virkelig godt produkt og hurtig levering.",
      status: "Godkendt"
    },
    {
      customer: "Jonas Hansen",
      product: "Premium Produkt",
      stars: 4,
      text: "God kvalitet, men levering tog lidt tid.",
      status: "Afventer"
    },
    {
      customer: "Sofie Lund",
      product: "Test Produkt",
      stars: 5,
      text: "Mega tilfreds — vil købe igen.",
      status: "Godkendt"
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
          <h1>Reviews / Produktanmeldelser</h1>
          <p>Administrér anmeldelser og social proof.</p>
        </div>

        <button style={button}>
          Send review invitation
        </button>
      </div>

      <div style={{ display: "grid", gap: "18px", marginTop: "30px" }}>
        {reviews.map((review, index) => (
          <div key={index} style={card}>
            <div>
              <h2>{review.customer}</h2>

              <p>
                Produkt: {review.product}
              </p>

              <p>
                {"⭐".repeat(review.stars)}
              </p>

              <p>
                "{review.text}"
              </p>

              <span style={badge(review.status)}>
                {review.status}
              </span>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button style={secondary}>
                Godkend
              </button>

              <button style={danger}>
                Slet
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

const badge = (status) => ({
  background:
    status === "Godkendt"
      ? "#16a34a"
      : "#f59e0b",
  color: "white",
  padding: "8px 12px",
  borderRadius: "999px",
  fontSize: "12px"
});

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

const danger = {
  background: "#dc2626",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
