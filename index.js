import Link from "next/link";

export default function Home() {
  const handleSubscribe = async () => {
    const res = await fetch("/api/create-checkout-session", { method: "POST" });
    const data = await res.json();
    if (data?.url) window.location.href = data.url;
    else alert(data?.error || "Nu s-a putut iniția plata.");
  };
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 40, textAlign: "center" }}>
      <img src="/logo.svg" alt="LoveX" width="80" height="80" />
      <h1>💖 Bine ai venit pe LoveX</h1>
      <p>Platformă de dating cu abonament: <strong>10€ / lună</strong>.</p>
      <button onClick={handleSubscribe}
        style={{ marginTop: 20, padding: "12px 22px", fontSize: 16, border: "none", borderRadius: 10, background: "#e91e63", color: "#fff", cursor: "pointer" }}>
        Activează abonamentul
      </button>
      <div style={{ marginTop: 30 }}>
        <Link href="/register">Creează cont</Link> {" | "}
        <Link href="/login">Autentificare</Link> {" | "}
        <Link href="/admin">Admin</Link>
      </div>
    </div>
  );
}
