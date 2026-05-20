export default function Loyalty() {
  const members = [
    {
      customer: "Maria Jensen",
      points: 420,
      tier: "Gold"
    },
    {
      customer: "Jonas Hansen",
      points: 180,
      tier: "Silver"
    },
    {
      customer: "Sofie Lund",
      points: 60,
      tier: "Bronze"
    }
  ];

  const rewards = [
    {
      name: "10% rabat",
      points: 100
    },
    {
      name: "Fri fragt",
      points: 150
    },
    {
      name: "25% rabat",
      points: 300
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
          <h1>Loyalty Program / Kundeklub</h1>
          <p>Beløn kunder med point og rabatter.</p>
        </div>

        <button style={button}>
          + Opret reward
        </button>
      </div>

      <div style={grid}>
        <div style={card}>
          <h2>Rewards</h2>

          {rewards.map((reward) => (
            <div key={reward.name} style={rewardRow}>
              <div>
                <strong>{reward.name}</strong>
                <p>{reward.points} point</p>
              </div>

              <button style={secondary}>
                Rediger
              </button>
            </div>
          ))}
        </div>

        <div style={card}>
          <h2>Kundeklub medlemmer</h2>

          {members.map((member) => (
            <div key={member.customer} style={memberRow}>
              <div>
                <strong>{member.customer}</strong>
                <p>{member.points} point</p>
              </div>

              <span style={badge(member.tier)}>
                {member.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  marginTop: "30px"
};

const card = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "14px",
  padding: "24px"
};

const rewardRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #eee",
  padding: "16px 0"
};

const memberRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #eee",
  padding: "16px 0"
};

const badge = (tier) => ({
  background:
    tier === "Gold"
      ? "#d4af37"
      : tier === "Silver"
      ? "#9ca3af"
      : "#b45309",
  color: "white",
  padding: "8px 12px",
  borderRadius: "999px",
  fontSize: "12px"
});

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
  padding: "10px 14px",
  borderRadius: "10px",
  cursor: "pointer"
};
