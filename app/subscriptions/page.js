export default function Subscriptions() {
  const subscriptions = [
    {
      name: "Protein Pulver Abonnement",
      price: "199 kr/md",
      interval: "Månedligt",
      status: "Aktiv"
    },
    {
      name: "Kaffe Abonnement",
      price: "99 kr/md",
      interval: "Månedligt",
      status: "Aktiv"
    },
    {
      name: "Beauty Box",
      price: "299 kr/md",
      interval: "Hver 3. måned",
      status: "Kladde"
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
          <h1>Subscriptions / Abonnementer</h1>
          <p>Opret og administrér abonnement-produkter.</p>
        </div>

        <button style={button}>
          + Opret abonnement
        </button>
      </div>

      <div style={card}>
        <h2>Nyt abonnement</h2>

        <input
          placeholder="Produktnavn"
          style={input}
        />

        <input
          placeholder="Pris fx 199 kr/md"
          style={input}
        />

        <select style={input}>
          <option>Frekvens</option>
          <option>Månedligt</option>
          <option>Hver 14. dag</option>
          <option>Hver 3. måned</option>
          <option>Årligt</option>
        </select>

        <button style={button}>
          Gem abonnement
        </button>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Aktive abonnementer
      </h2>

      <div style={{ display: "grid", gap: "16px" }}>
        {subscriptions.map((subscription) => (
          <div key={subscription.name} style={row}>
            <div>
              <h3>{subscription.name}</h3>
              <p>Pris: {subscription.price}</p>
              <p>Frekvens: {subscription.interval}</p>

              <span style={badge(subscription.status)}>
                {subscription.status}
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
