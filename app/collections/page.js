export default function Collections() {
  const collections = [
    {
      id: 1,
      name: "Bestsellers",
      products: 12,
      status: "Aktiv"
    },
    {
      id: 2,
      name: "Nyheder",
      products: 5,
      status: "Aktiv"
    },
    {
      id: 3,
      name: "Udsalg",
      products: 8,
      status: "Kladde"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Collections / Kategorier</h1>
      <p>Organisér produkter i kategorier.</p>

      <div style={box}>
        <h2>Opret kategori</h2>

        <input
          placeholder="Kategori navn"
          style={input}
        />

        <textarea
          placeholder="Beskrivelse"
          style={{
            ...input,
            minHeight: "100px"
          }}
        />

        <button style={button}>
          Opret kategori
        </button>
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Dine kategorier
      </h2>

      <div
        style={{
          display: "grid",
          gap: "18px"
        }}
      >
        {collections.map((collection) => (
          <div key={collection.id} style={card}>
            <div>
              <h2>{collection.name}</h2>
              <p>Produkter: {collection.products}</p>
              <p>Status: {collection.status}</p>
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

const box = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px",
  maxWidth: "700px",
  marginTop: "25px"
};

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "22px",
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
