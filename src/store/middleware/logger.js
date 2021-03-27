


import { cityAddedFullFilled } from '../city'

let logger = extraParameters => store => next => action => {
    // extraParameters
    // if you need to pass a parameter to middle ware 
    // it is passed in configureStore 
    console.log('Extra Parameters', extraParameters);
    console.log('store', store);
    // console.log('next', next);
    console.log('action', action);
    // store.dispatch(cityAddedFullFilled())
    next(action)
}


let logger2 = store => next => action => {
    // console.log('store', x);
    // console.log('next', y);
    console.log('action', action);
    next(action)
}

export default logger;
export { logger2 };