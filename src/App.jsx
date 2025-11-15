import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="h-[calc(100vh-16px)] m-2">
        <div className="flex flex-col">
          <Head />
          <RouterProvider router={router} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
