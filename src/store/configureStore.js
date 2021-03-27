import { configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import { logger2 } from "./middleware/logger";
import customThunk from './middleware/customThunk';
import errorMiddleWare from './middleware/errorMiddleWare';


import reducer from "./reducer";

export default function () {
    return configureStore({
        reducer,
        // middleware: [logger(': extra Parameter is logging ...'), logger2, customThunk],
        middleware: [logger(': extra Parameter is logging ...'),
            customThunk,
            errorMiddleWare
        ],
    })
}