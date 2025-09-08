import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setMsg("Eroare: " + error.message);
    else setMsg("Cont creat! Verifică email-ul pentru confirmare.");
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Înregistrare</h1>
      <form onSubmit={handleRegister}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input
          type="password"
          placeholder="Parolă"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button type="submit">Creează cont</button>
      </form>
      <p>{msg}</p>
     
