export default function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Autentificare</h1>
      <form>
        <input type="email" placeholder="Email" /><br/><br/>
        <input type="password" placeholder="Parola" /><br/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
