import Link from "next/link";
export default function Login() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 40, textAlign: "center" }}>
      <h1>🔐 Autentificare</h1>
      <p>(Demo) Formular de login.</p>
      <p style={{ marginTop: 20 }}><Link href="/">⟵ Înapoi la Home</Link></p>
    </div>
  );
}
