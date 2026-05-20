export default function Marketplace() {
  const apps = [
    {
      name: "Judge Reviews",
      category: "Reviews",
      text: "Produktanmeldelser og social proof",
      price: "Gratis"
    },
    {
      name: "Email Pro",
      category: "Marketing",
      text: "Email automation & abandoned carts",
      price: "99 kr/md"
    },
    {
      name: "MobilePay Checkout",
      category: "Payments",
      text: "Dansk checkout integration",
      price: "Gratis"
    },
    {
      name: "SEO Booster",
      category: "SEO",
      text: "Automatisk SEO optimering",
      price: "49 kr/md"
    },
    {
      name: "Theme Fashion",
      category: "Themes",
      text: "Moderne webshop theme",
      price: "199 kr"
    },
    {
      name: "Upsell Booster",
      category: "Sales",
      text: "Øg AOV med upsells",
      price: "149 kr/md"
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
          <h1>Marketplace / App Store</h1>
          <p>Installer apps, themes og plugins til webshoppen.</p>
        </div>

        <input
          placeholder="Søg apps..."
          style={search}
        />
      </div>

      <div style={grid}>
        {apps.map((app) => (
          <div key={app.name} style={card}>
            <span style={badge}>
              {app.category}
            </span>

            <h2>{app.name}</h2>

            <p>{app.text}</p>

            <strong>{app.price}</strong>

            <button style={button}>
              Installer
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "14px"
};

const badge = {
  background: "#111827",
  color: "white",
  width: "fit-content",
  padding: "8px 12px",
  borderRadius: "999px",
  fontSize: "12px"
};

const search = {
  padding: "14px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  width: "300px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer",
  marginTop: "auto"
};
