export default function GiftCards() {
  const giftCards = [
    {
      code: "GIFT100",
      value: "100 kr",
      status: "Aktiv"
    },
    {
      code: "GIFT250",
      value: "250 kr",
      status: "Brugt"
    },
    {
      code: "GIFT500",
      value: "500 kr",
      status: "Aktiv"
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
          <h1>Gift Cards / Gavekort</h1>
          <p>Opret og administrér digitale gavekort.</p>
        </div>

        <button style={button}>
          + Opret gavekort
        </button>
      </div>

      <div style={card}>
        <h2>Nyt gavekort</h2>

        <input
          placeholder="Beløb fx 250 kr"
          style={input}
        />

        <input
          placeholder="Kode fx GIFT250"
          style={input}
        />

        <select style={input}>
          <option>Status</option>
          <option>Aktiv</option>
          <option>Inaktiv</option>
        </select>

        <button style={button}>
          Gem gavekort
        </button>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Dine gavekort
      </h2>

      <div style={{ display: "grid", gap: "16px" }}>
        {giftCards.map((giftCard) => (
          <div key={giftCard.code} style={row}>
            <div>
              <h3>{giftCard.code}</h3>
              <p>Værdi: {giftCard.value}</p>

              <span style={badge(giftCard.status)}>
                {giftCard.status}
              </span>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button style={secondary}>
                Rediger
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
  padding: "24px",
  maxWidth: "700px",
  marginTop: "30px"
};

const row = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "20px",
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

const badge = (status) => ({
  background:
    status === "Aktiv"
      ? "#16a34a"
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
