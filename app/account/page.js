export default function Account() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Min konto</h1>
      <p>Administrér profil, email og abonnement.</p>

      <div style={{ display: "grid", gap: "20px", maxWidth: "750px", marginTop: "30px" }}>
        <div style={card}>
          <h2>Profil</h2>
          <input placeholder="Fulde navn" style={input} />
          <input placeholder="Email" style={input} />
          <button style={button}>Gem profil</button>
        </div>

        <div style={card}>
          <h2>Abonnement</h2>
          <p>Plan: Pro</p>
          <p>Status: Aktiv</p>
          <a href="/plans" style={buttonLink}>Skift plan</a>
        </div>

        <div style={card}>
          <h2>Sikkerhed</h2>
          <input placeholder="Ny adgangskode" type="password" style={input} />
          <button style={button}>Opdater adgangskode</button>
        </div>
      </div>
    </main>
  );
}

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px"
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

const buttonLink = {
  display: "inline-block",
  background: "#111827",
  color: "white",
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: "10px"
};
