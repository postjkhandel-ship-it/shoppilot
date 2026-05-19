export default function Login() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial", maxWidth: "500px" }}>
      <h1>Log ind</h1>
      <p>Log ind på din Shoppilot konto.</p>

      <input placeholder="Email" style={input} />
      <input placeholder="Adgangskode" type="password" style={input} />

      <a href="/dashboard" style={button}>Log ind</a>
    </main>
  );
}

const input = {
  display: "block",
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px"
};

const button = {
  display: "inline-block",
  background: "#111827",
  color: "white",
  padding: "12px 18px",
  borderRadius: "10px",
  textDecoration: "none"
};
