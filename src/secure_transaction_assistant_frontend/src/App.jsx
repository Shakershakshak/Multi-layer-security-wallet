import React, { useState } from "react";
import { secure_transaction_assistant_backend } from "../../declarations/secure_transaction_assistant_backend";

export default function App() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const tx = {
        to,
        amount: Number(amount),
      };

      const response =
        await secure_transaction_assistant_backend.analyze_transaction(tx);
      setResult(response);
    } catch (error) {
      setResult({ is_safe: false, reason: " Error connecting to server❌" });
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1>🔐 Secure Transaction Assistant</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Recipient's address"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="number"
          placeholder="{value}"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? " Checking..." : "transaction analysis"}
        </button>
      </form>

      {result && (
        <div style={result.is_safe ? styles.safeBox : styles.unsafeBox}>
          {result.is_safe ? "✅ safe " : "❌ unsafe"} — {result.reason}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    fontFamily: "Arial",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#0a84ff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  safeBox: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#d4f4dd",
    color: "#006b2f",
    borderRadius: "8px",
  },
  unsafeBox: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#fddede",
    color: "#a80000",
    borderRadius: "8px",
  },
};
