import { useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname.split("/");

  return <div>Breadcrumbs</div>;
}
