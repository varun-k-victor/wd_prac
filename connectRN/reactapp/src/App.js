// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
    <form action='/form' method='post'>
    <input type='text' name='fname' placeholder='first name'/>
    <input type='text' name='lname' placeholder='last name'/>
    <input type='submit' value='submit'/>
    </form>
    </div>
  );
}

export default App;
