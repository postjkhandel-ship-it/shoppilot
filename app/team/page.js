export default function Team() {
  const members = [
    {
      name: "Jonas Lund",
      email: "jonas@email.dk",
      role: "Admin"
    },
    {
      name: "Maria Jensen",
      email: "maria@email.dk",
      role: "Manager"
    },
    {
      name: "Peter Hansen",
      email: "peter@email.dk",
      role: "Support"
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
          <h1>Team & Roller</h1>
          <p>Administrér medarbejdere og adgang.</p>
        </div>

        <button style={button}>
          + Inviter bruger
        </button>
      </div>

      <div style={{ display: "grid", gap: "18px", marginTop: "30px" }}>
        {members.map((member) => (
          <div key={member.email} style={card}>
            <div>
              <h2>{member.name}</h2>
              <p>{member.email}</p>
              <p>Rolle: {member.role}</p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button style={secondary}>
                Rediger rolle
              </button>

              <button style={danger}>
                Fjern adgang
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
