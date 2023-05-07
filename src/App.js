import './App.css';
import MyButton from './components/Buttons/button';
import Profile from './components/displaying data/displaying_data';
import RederComponent  from './components/conditonal_rendering/render_these_component'
import Product from './components/rendering_list_array/rendering_order_list';

function App() {
  return (
    <><div className="heading">
       <header>
        <h1>Welcome to React js</h1>
       </header>
      </div>
      <h2>Making components and reuse them </h2>
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <h2>Displaying data from object</h2>
      <Profile/>
      <h2>Conditional rendering</h2>
      <RederComponent/><br/>
      <h2>Rendering list of items from array</h2>
      <Product/>

    </>
  );
}


export default App;
