import Link from "next/link";
export default function Register() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 40, textAlign: "center" }}>
      <h1>📝 Înregistrare</h1>
      <p>(Demo) Formular de înregistrare.</p>
      <p style={{ marginTop: 20 }}><Link href="/">⟵ Înapoi la Home</Link></p>
    </div>
  );
}
