export default function Builder() {
  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Webshop Builder</h1>
      <p>Byg og rediger din webshop uden kode.</p>

      <div style={{ display: "grid", gap: "20px", maxWidth: "800px" }}>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h2>1. Vælg webshop navn</h2>
          <input placeholder="Fx Min Webshop" style={{ padding: "12px", width: "100%" }} />
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h2>2. Tilføj produkter</h2>
          <p>Opret produkter, priser, billeder og beskrivelser.</p>
          <a href="/products">Gå til produkter</a>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h2>3. Design din webshop</h2>
          <p>Skift farver, tekster, logo og forside.</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h2>4. Gå live</h2>
          <p>Forbind domæne, betaling og begynd at sælge.</p>
        </div>
      </div>

      <br />
      <a href="/dashboard">Tilbage til dashboard</a>
    </main>
  );
}
