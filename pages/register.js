export default function Register() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Crează cont</h1>
      <form>
        <input type="text" placeholder="Nume utilizator" /><br/><br/>
        <input type="email" placeholder="Email" /><br/><br/>
        <input type="password" placeholder="Parola" /><br/><br/>
        <button type="submit">Înregistrează-te</button>
      </form>
    </div>
  );
}
