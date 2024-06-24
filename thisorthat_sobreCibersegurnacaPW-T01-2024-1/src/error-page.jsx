import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page">
        <h1>Ops!</h1>
        <p>Desculpe, nao encontramos esta pagina.</p>
      </div>
    );
  }