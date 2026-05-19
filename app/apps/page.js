export default function Apps() {
  const apps = [
    {
      name: "Email Marketing",
      text: "Send emails og abandoned cart flows."
    },
    {
      name: "Reviews",
      text: "Vis produktanmeldelser på webshoppen."
    },
    {
      name: "Facebook Pixel",
      text: "Track køb og annoncer."
    },
    {
      name: "Google Analytics",
      text: "Mål trafik og salg."
    },
    {
      name: "MobilePay",
      text: "Tilføj MobilePay checkout."
    },
    {
      name: "Klaviyo",
      text: "Automatisér email marketing."
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Apps & Integrationer</h1>
      <p>Tilføj funktioner til webshoppen.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {apps.map((app) => (
          <div key={app.name} style={card}>
            <h2>{app.name}</h2>
            <p>{app.text}</p>

            <button style={button}>
              Installer
            </button>
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
  padding: "20px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
