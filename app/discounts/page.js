export default function Discounts() {
  const discounts = [
    { code: "WELCOME10", type: "10% rabat", status: "Aktiv" },
    { code: "FREESHIP", type: "Fri fragt", status: "Aktiv" },
    { code: "SUMMER25", type: "25% rabat", status: "Kladde" }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Rabatkoder</h1>
      <p>Opret og administrér kampagner til webshoppen.</p>

      <div style={card}>
        <h2>Opret rabatkode</h2>

        <input placeholder="Kode fx WELCOME10" style={input} />
        <input placeholder="Rabat fx 10%" style={input} />

        <select style={input}>
          <option>Vælg type</option>
          <option>Procent rabat</option>
          <option>Fast beløb</option>
          <option>Fri fragt</option>
        </select>

        <button style={button}>Opret rabatkode</button>
      </div>

      <h2 style={{ marginTop: "35px" }}>Aktive rabatkoder</h2>

      <div style={{ display: "grid", gap: "12px" }}>
        {discounts.map((discount) => (
          <div key={discount.code} style={row}>
            <div>
              <strong>{discount.code}</strong>
              <p>{discount.type}</p>
            </div>

            <p>Status: {discount.status}</p>
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
  maxWidth: "650px",
  marginTop: "30px"
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const row = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "18px",
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
