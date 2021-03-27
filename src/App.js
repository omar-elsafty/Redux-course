import './App.css';
import { Counter } from './app/features/counter/Counter';
import { Car } from './app/features/car/Car';
import Example from './components/reactToPrint';

// import Example from './components/reactToPrint';

import configureStore from './newStore/configureStore';
import { cityAdded, cityRemoved, getCities } from './store/city';
import { addCountry } from './store/country';
import { loadnews } from './newStore/entities/news';

function App() {

  let store = configureStore()

  //last virgion
  // store.dispatch((dispatch, getState) => cityAdded(1, dispatch, getState))


  // store.dispatch(cityAdded(1));
  // store.dispatch(addCountry({ id: 1, name: 'egy' }));


  // store.dispatch({
  //   type: 'apiRequest',
  //   payload: {
  //     url: '/news',
  //     onSccess: 'ADD_NEWS',
  //     onError: 'error'
  //   }
  // });


  store.dispatch(loadnews());

  // store.dispatch(cityAdded({ id: 2, name: 'alex' }))

  // store.dispatch(cityRemoved({ id: 1, name: 'cairo' }))

  // let x = getCities(store.getState());
  // let y = getCities(store.getState());

  // console.log(x);
  // console.log(y);
  // console.log(x === y);

  return (
    <>
      {/* <Counter />
      <Car /> */}
      {/* <Example /> */}
      {/* <Example /> */}
    </>
  );
}

export default App;
