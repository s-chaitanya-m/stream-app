import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="h-[calc(100vh-16px)] m-2">
        <div className="h-full flex flex-col">
          <Head />
          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;
