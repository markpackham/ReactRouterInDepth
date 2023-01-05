import { Link, useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
          <p>JS Crypto UUID: {crypto.randomUUID()}</p>
        </Link>
      ))}
    </div>
  );
}

// Data loader
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4444/careers");

  if (!res.ok) {
    throw Error("Could not fetch the list of careers");
  }

  return res.json();
};
