import './App.css';
import MyButton from './components/Buttons/button';
import Profile from './components/displaying data/displaying_data';
import RederComponent  from './components/conditonal_rendering/render_these_component'
import Product from './components/rendering_list_array/rendering_order_list';
import RespondEvent from './components/responding_events/responding_event';
import CountClick from './components/update_state/infoRemember'
import ShareData from './components/sharing_data/sharing_data_bw_component';
import ProfileC from './components/passing_props_componet/passing_props_component';
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
      <h2>Respoding to events</h2>
      <RespondEvent/>
      <h2>components remember the information or update the screen using useState hook </h2>
      <CountClick/>
      <CountClick/>
      <h2>Sharing data between Component </h2>
      <ShareData/>
      <h2>Passing Props to Component</h2>
      <ProfileC/>
    </>
  );
}


export default App;
