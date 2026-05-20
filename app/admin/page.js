export default function Admin() {
  const users = [
    {
      name: "Jonas Lund",
      email: "jonas@email.dk",
      store: "Nordic Fashion",
      plan: "Pro"
    },
    {
      name: "Maria Jensen",
      email: "maria@email.dk",
      store: "Beauty House",
      plan: "Starter"
    },
    {
      name: "Peter Hansen",
      email: "peter@email.dk",
      store: "Tech Universe",
      plan: "Business"
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
          <h1>Admin Panel</h1>
          <p>Administrér brugere og webshops.</p>
        </div>

        <button style={button}>
          + Opret bruger
        </button>
      </div>

      <div style={{ display: "grid", gap: "18px", marginTop: "30px" }}>
        {users.map((user) => (
          <div key={user.email} style={card}>
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>Webshop: {user.store}</p>
              <p>Plan: {user.plan}</p>
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

const danger = {
  background: "#dc2626",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
