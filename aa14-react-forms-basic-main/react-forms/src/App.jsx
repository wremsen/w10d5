// import Form from './form';
// import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// function Layout() {
//   return (
//     <div className="app">
//       <h1> Hello from App </h1>;
//       <Outlet />
//     </div>
//   );
// }

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: 'form',
//         element: <Form />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

import Form from './form';

function App() {
  return (
    <>
      <h1> Hello from App </h1>
      <Form />
    </>
  );
}

export default App;
