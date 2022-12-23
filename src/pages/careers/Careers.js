import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return <div className="careers"></div>;
}

// Loader function
export const carrersLoader = async () => {
  // whatever port json-server is using
  const res = await fetch("http://localhost:4444");

  return res.json();
};
