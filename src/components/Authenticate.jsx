import { useState } from "react";
export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [successData, setSuccessData] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      //
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            }   
           }
        );
        const result = await response.json();
      setSuccessMessage(result.message);
      setSuccessData(result.data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {successData && <p>{successMessage}</p>}
            {successData && (
              <div>
                <p>Username:</p>
                <pre>{JSON.stringify(successData)}</pre>
              </div>
            )}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
          
    </div>
  );
}