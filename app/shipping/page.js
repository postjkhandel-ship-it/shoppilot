export default function Shipping() {
  const methods = [
    {
      name: "GLS Pakkeshop",
      price: "39 kr",
      status: "Aktiv"
    },
    {
      name: "DAO Hjemmelevering",
      price: "49 kr",
      status: "Aktiv"
    },
    {
      name: "PostNord",
      price: "59 kr",
      status: "Kladde"
    },
    {
      name: "Fri fragt",
      price: "0 kr",
      status: "Aktiv"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Shipping / Fragt</h1>
      <p>Administrér leveringsmetoder og fragtpriser.</p>

      <div style={card}>
        <h2>Opret fragtmetode</h2>

        <input
          placeholder="Fragt navn (fx GLS Pakkeshop)"
          style={input}
        />

        <input
          placeholder="Pris (fx 39 kr)"
          style={input}
        />

        <select style={input}>
          <option>Leveringstype</option>
          <option>Pakkeshop</option>
          <option>Hjemmelevering</option>
          <option>Fri fragt</option>
        </select>

        <button style={button}>
          Opret fragtmetode
        </button>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Leveringsmetoder
      </h2>

      <div style={{ display: "grid", gap: "16px" }}>
        {methods.map((method) => (
          <div key={method.name} style={row}>
            <div>
              <h3>{method.name}</h3>
              <p>Pris: {method.price}</p>
              <p>Status: {method.status}</p>
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
