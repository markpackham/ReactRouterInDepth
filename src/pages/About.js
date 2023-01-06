import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const [user, setUser] = useState("Edward");

  // we set a user by default so the only way to logout is clicking on the Logout button
  if (!user) {
    // "replace" is used to replace the history so the "About" page is removed from it
    // this will impact our Browser's back button so we can't return to "About" when logged out
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
