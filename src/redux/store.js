import { createStore, compose } from "redux";
import rootReducer from "./reducers";

const allStoreEnhancers = compose(
     window.devToolsExtension && window.devToolsExtension()
 );

export default createStore(rootReducer, allStoreEnhancers);
