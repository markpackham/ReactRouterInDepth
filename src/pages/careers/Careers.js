import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return <div className="careers"></div>;
}

// Loader function
const carrersLoader = async () => {};
