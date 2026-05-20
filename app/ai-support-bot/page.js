export default function AISupportBot() {
  const messages = [
    {
      sender: "customer",
      text: "Hvor lang leveringstid er der?"
    },
    {
      sender: "bot",
      text: "Leveringstiden er typisk 1–3 hverdage 🚚"
    },
    {
      sender: "customer",
      text: "Hvordan returnerer jeg?"
    },
    {
      sender: "bot",
      text: "Du har 30 dages returret. Gå til Retur & Refundering i din konto."
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <div style={{ maxWidth: "1100px" }}>
        <h1>AI Customer Support Bot</h1>

        <p>
          Automatisér kundesupport med AI chatbot til levering,
          retur, FAQ, ordrestatus og produkter.
        </p>

        <div style={layout}>
          <div style={card}>
            <h2>Bot Indstillinger</h2>

            <input
              placeholder="Bot navn"
              defaultValue="Shoppilot AI Assistant"
              style={input}
            />

            <textarea
              placeholder="Bot instruktioner"
              defaultValue="Svar professionelt og hjælp kunder med ordrestatus, retur, levering og produkter."
              style={textarea}
            />

            <select style={input}>
              <option>Sprog</option>
              <option>Dansk</option>
              <option>Engelsk</option>
              <option>Svensk</option>
              <option>Tysk</option>
            </select>

            <select style={input}>
              <option>Support stil</option>
              <option>Professionel</option>
              <option>Venlig</option>
              <option>High Conversion</option>
            </select>

            <button style={button}>
              Gem chatbot
            </button>
          </div>

          <div style={card}>
            <h2>Live Preview</h2>

            <div style={chatBox}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent:
                      message.sender === "customer"
                        ? "flex-end"
                        : "flex-start"
                  }}
                >
                  <div
                    style={{
                      background:
                        message.sender === "customer"
                          ? "#111827"
                          : "#f3f4f6",
                      color:
                        message.sender === "customer"
                          ? "white"
                          : "black",
                      padding: "14px",
                      borderRadius: "14px",
                      maxWidth: "75%",
                      marginBottom: "12px"
                    }}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div style={messageBox}>
              <input
                placeholder="Skriv besked..."
                style={chatInput}
              />

              <button style={sendButton}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const layout = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "24px",
  marginTop: "30px"
};

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px"
};

const input = {
  width: "100%",
  padding: "14px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  marginBottom: "14px"
};

const textarea = {
  width: "100%",
  minHeight: "150px",
  padding: "16px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  marginBottom: "14px"
};

const chatBox = {
  background: "#f8fafc",
  borderRadius: "14px",
  padding: "20px",
  minHeight: "420px",
  marginTop: "20px"
};

const messageBox = {
  display: "flex",
  gap: "12px",
  marginTop: "16px"
};

const chatInput = {
  flex: 1,
  padding: "14px",
  border: "1px solid #ddd",
  borderRadius: "12px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "16px 20px",
  borderRadius: "12px",
  cursor: "pointer",
  width: "100%"
};

const sendButton = {
  background: "#16a34a",
  color: "white",
  border: "none",
  padding: "14px 18px",
  borderRadius: "12px",
  cursor: "pointer"
};
