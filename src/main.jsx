import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import ErrorPage from "./error-page";
import 'bootstrap/dist/css/bootstrap.min.css'
import Root from "./routes/root";

import Perfil from './Perfil/Perfil.jsx';
import Academico from './Academico/Academico.jsx';
import Portifolio from './Portifolio/Portifolio.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, 
          element: <Navigate to="perfil" replace />,
        },
        {
          path: "perfil",
          element: <Perfil urlPerfil={"/Json/Perfil.json"} />,
        },
        {
          path: "academico",
          element: <Academico urlAcademico={"/Json/Academico.json"} />,
        },
        {
          path: "portifolio",
          element: <Portifolio urlPortifolio={"/Json/Portifolio.json"} />,
        },
      ],
    },
  ],
  { basename: "/portifolio-gabriel" }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
