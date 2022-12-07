import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';
import { CreateTodo } from './Components/CreateTodo';
import { ShowTodoList } from './Components/ShowTodoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ShowTodoList/>}/>
          <Route path='/create-todo' element={<CreateTodo/>}/>        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
