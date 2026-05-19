export default function Plans() {
  const plans = [
    {
      name: "Starter",
      price: "199 kr/md",
      text: "Til nye webshops der vil hurtigt i gang.",
      features: ["1 webshop", "Op til 25 produkter", "Basis checkout"]
    },
    {
      name: "Pro",
      price: "399 kr/md",
      text: "Til webshops der vil vækste.",
      features: ["3 webshops", "Ubegrænsede produkter", "Analytics", "Custom domæne"]
    },
    {
      name: "Business",
      price: "799 kr/md",
      text: "Til større shops og bureauer.",
      features: ["10 webshops", "Prioriteret support", "Avanceret checkout", "Team adgang"]
    }
  ];

  return (
    <main style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Abonnementer</h1>
      <p>Vælg den plan der passer til webshoppen.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: "20px", marginTop: "30px" }}>
        {plans.map((plan) => (
          <div key={plan.name} style={card}>
            <h2>{plan.name}</h2>
            <h1>{plan.price}</h1>
            <p>{plan.text}</p>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <button style={button}>Vælg plan</button>
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
  padding: "24px"
};

const button = {
  background: "#111827",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "10px",
  cursor: "pointer"
};
