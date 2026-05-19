export default function Builder() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Webshop Builder</h1>

      <p>Her kan kunder redigere deres webshop.</p>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h2>Startsmiling</h2>
        <p>Få et renere smil på få minutter</p>

        <button
          style={{
            background: "#111827",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
          }}
        >
          Køb nu
        </button>
      </div>

      <br />

      <a href="/dashboard">Tilbage til dashboard</a>
    </main>
  );
}
