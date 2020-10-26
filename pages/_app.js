import "../styles/globals.scss";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers/index";

// Redux store
const store = createStore(reducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />{" "}
    </Provider>
  );
}

export default MyApp;
