import Link from "next/link";

export async function getServerSideProps() {
  const admins = process.env.ADMIN_EMAILS?.split(",").map(s => s.trim()).filter(Boolean) || [];
  const isAdmin = admins.length > 0;
  return { props: { isAdmin } };
}

export default function Admin({ isAdmin }) {
  if (!isAdmin) {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: 40, textAlign: "center" }}>
        <h1>⛔ Acces restricționat</h1>
        <p>Setează variabila <code>ADMIN_EMAILS</code> în Vercel → Project Settings → Environment Variables.</p>
        <p style={{ marginTop: 20 }}><Link href="/">⟵ Înapoi la Home</Link></p>
      </div>
    );
  }
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 40, textAlign: "center" }}>
      <h1>🔑 Panou Admin – LoveX</h1>
      <ul style={{ listStyle: "none", padding: 0, marginTop: 30 }}>
        <li>👥 Utilizatori (demo)</li>
        <li>💳 Abonamente active (demo)</li>
        <li>⚙️ Setări (demo)</li>
      </ul>
      <p style={{ marginTop: 20 }}><Link href="/">⟵ Înapoi la Home</Link></p>
    </div>
  );
}
