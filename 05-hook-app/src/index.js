import React from 'react';
import ReactDOM from 'react-dom';
// import SimpleForm from './components/02-useEffect/SimpleForm';
// import FormWitchCustomHook from './components/02-useEffect/FormWitchCustomHook';
// import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
// import FocusScren from './components/04-useRef/FocusScren';
// import RealExampleRef from './components/04-useRef/RealExampleRef';
// import LayoutEffect from './components/05-useLayoutEffect/LayoutEffect';
// import Memo from './components/06-memo/Memo';
// import MemoHook from './components/06-memo/MemoHook';
// import { CallBackHook } from './components/07-CallBackHook/CallBackHook';
// import { Padre } from './components/08-tarea-memo/Padre';
// import TodoApp from './components/09-useReducer/TodoApp';
// import { AppHook } from './AppHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import './index.css';
import { MainApp } from './components/10-useContext/MainApp';


ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);

// import './components/09-useReducer/introReducer';