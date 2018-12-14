import reducers from "../reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "../middleware/index";

const store = createStore(reducers, applyMiddleware(logger));

export default store;
