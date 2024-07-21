import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <div>Ada Error Nih !!!</div>;
}

export default ErrorPage;
