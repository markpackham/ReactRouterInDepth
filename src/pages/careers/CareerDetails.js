import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
          distinctio?
        </p>
      </div>
    </div>
  );
}

// Data loader
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:4444/careers/${id}`);

  return res.json();
};
