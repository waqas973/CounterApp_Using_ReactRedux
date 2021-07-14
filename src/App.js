import './App.css';
import {Increase,Decrease} from './actions/index'; 
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function App() {

const myState = useSelector((state)=> state.changeNumber);
const dispatch = useDispatch();
  return (
    <div className="main-div">
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div className="quantity">
        <a className="quantity__minus" title="Decrement" name="Decrement" onClick={()=> dispatch(Decrease())}>-</a>
        <input name="quantity" type="text" className="quantity__input" value={myState}  />
        <a className="quantity__plus" title="Increment" name="Increment" onClick={()=> dispatch(Increase())}>+</a>
      </div>  
      </div>
  </div>
  );
}


export default App;
