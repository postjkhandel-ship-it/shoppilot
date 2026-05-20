export default function Notifications() {
  const notifications = [
    {
      title: "Ny ordre modtaget",
      text: "Maria Jensen købte Produkt 1",
      type: "Ordre"
    },
    {
      title: "Betaling modtaget",
      text: "299 kr modtaget via Stripe",
      type: "Betaling"
    },
    {
      title: "Domæne forbundet",
      text: "mitdomæne.dk er nu aktivt",
      type: "System"
    },
    {
      title: "Rabatkode brugt",
      text: "WELCOME10 blev brugt",
      type: "Marketing"
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Notifikationer</h1>
      <p>Følg aktivitet i webshoppen.</p>

      <div style={{ display: "grid", gap: "16px", marginTop: "30px" }}>
        {notifications.map((notification) => (
          <div key={notification.title} style={card}>
            <div>
              <span style={badge}>
                {notification.type}
              </span>

              <h2 style={{ marginTop: "12px" }}>
                {notification.title}
              </h2>

              <p>{notification.text}</p>
            </div>

            <button style={button}>
              Marker som læst
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
  padding: "22px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const badge = {
  background: "#111827",
  color: "white",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "12px"
};

const button = {
  background: "#f3f4f6",
  border: "none",
  padding: "12px 16px",
  borderRadius: "10px",
  cursor: "pointer"
};
