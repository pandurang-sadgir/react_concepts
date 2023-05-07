import './App.css';
import MyButton from './components/Buttons/button';
import Profile from './components/displaying data/displaying_data';


function App() {
  return (
    <><div className="heading">
       <header>
        <h1>Welcome to React js</h1>
       </header>
      </div>
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <br></br>
      <h2>Displaying data from object</h2>
      <Profile/>
    </>
  );
}


export default App;
