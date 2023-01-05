import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();
  return (
    <div className="careers">
      {careers.map((career) => (
        // <Link to={`/careers/${career.id}`} key={career.id}>
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
          <p>JS Crypto UUID: {crypto.randomUUID()}</p>
        </Link>
      ))}
    </div>
  );
}

// Loader function
export const carrersLoader = async () => {
  // whatever port json-server is using
  const res = await fetch("http://localhost:4444/careers");

  if (!res.ok) {
    throw Error("Could not fetch careers");
  }

  return res.json();
};
