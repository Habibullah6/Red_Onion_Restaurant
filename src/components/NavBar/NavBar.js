import { NavLink } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './NavBar.css';
import Panel from "./Panel";
import Tabs from "./Tabs";


const NavBar = () => {

    return (
      <div className='my-5'> 
        <Tabs>
        <Panel title="Breakfast">
          <Breakfast></Breakfast>
        </Panel>
        <Panel title="Lunch">
          <Lunch></Lunch>
        </Panel>
        <Panel title="Dinner">
          <Dinner></Dinner>
        </Panel>
        </Tabs>
        <div className='my-5'>
         <NavLink to='*'>
         <button className='btn btn-danger px-5'>Checkout Your Food</button>
         </NavLink>
        </div>
      </div>
    );
};

export default NavBar;