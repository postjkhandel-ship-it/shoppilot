export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body style={{ margin: 0, fontFamily: "Arial", background: "#f6f8fb" }}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <aside
            style={{
              width: "280px",
              background: "#111827",
              color: "white",
              padding: "24px",
              position: "fixed",
              height: "100vh",
              overflowY: "auto"
            }}
          >
            <h2>Shoppilot</h2>

            <nav style={{ display: "grid", gap: "10px", marginTop: "30px" }}>
              <a style={link} href="/">Forside</a>
              <a style={link} href="/admin">Admin Panel</a>
              <a style={link} href="/stores">Mine Webshops</a>
              <a style={link} href="/create-store">Opret Webshop</a>
              <a style={link} href="/dashboard">Dashboard</a>

              <a style={link} href="/builder">Builder</a>
              <a style={link} href="/theme-editor">Theme Editor</a>
              <a style={link} href="/customizer">Customizer</a>
              <a style={link} href="/templates">Templates</a>
              <a style={link} href="/store">Webshop Preview</a>

              <a style={link} href="/products">Produkter</a>
              <a style={link} href="/collections">Collections</a>
              <a style={link} href="/inventory">Lagerstyring</a>
              <a style={link} href="/orders">Ordrer</a>
              <a style={link} href="/customers">Kunder</a>

              <a style={link} href="/discounts">Rabatkoder</a>
              <a style={link} href="/gift-cards">Gavekort</a>
              <a style={link} href="/loyalty">Kundeklub</a>
              <a style={link} href="/abandoned-carts">Forladte kurve</a>
              <a style={link} href="/reviews">Reviews</a>

              <a style={link} href="/analytics">Analytics</a>
              <a style={link} href="/reports">Rapporter</a>
              <a style={link} href="/marketing">Marketing</a>
              <a style={link} href="/apps">Apps</a>
              <a style={link} href="/marketplace">Marketplace</a>

              <a style={link} href="/checkout">Checkout</a>
              <a style={link} href="/shipping">Fragt</a>
              <a style={link} href="/taxes">Moms</a>
              <a style={link} href="/domains">Domæner</a>
              <a style={link} href="/invoices">Fakturaer</a>

              <a style={link} href="/plans">Abonnementer</a>
              <a style={link} href="/subscriptions">Produkt-abonnementer</a>
              <a style={link} href="/affiliate">Affiliate</a>
              <a style={link} href="/pos">POS</a>

              <a style={link} href="/ai-builder">AI Store Builder</a>
              <a style={link} href="/ai-product-generator">AI Product Generator</a>
              <a style={link} href="/ai-ads-generator">AI Ads Generator</a>
              <a style={link} href="/ai-creative-generator">AI Creative Generator</a>
              <a style={link} href="/ai-seo-generator">AI SEO Generator</a>
              <a style={link} href="/ai-email-generator">AI Email Generator</a>
              <a style={link} href="/ai-support-bot">AI Support Bot</a>
              <a style={link} href="/ai-store-manager">AI Store Manager</a>
              <a style={link} href="/ai-competitor-spy">AI Competitor Spy</a>
              <a style={link} href="/ai-pricing-optimizer">AI Pricing Optimizer</a>

              <a style={link} href="/pages">Sider</a>
              <a style={link} href="/navigation">Navigation</a>
              <a style={link} href="/notifications">Notifikationer</a>
              <a style={link} href="/support">Support</a>
              <a style={link} href="/team">Team & Roller</a>
              <a style={link} href="/account">Min konto</a>
              <a style={link} href="/settings">Indstillinger</a>
            </nav>
          </aside>

          <main style={{ marginLeft: "280px", width: "100%" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  padding: "10px 12px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.06)"
};
