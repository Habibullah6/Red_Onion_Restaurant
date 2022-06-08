
import useFoodData from '../../hooks/useFoodData';
import BreakfastItem from '../BreakfastItem/BreakfastItem';

const Breakfast = (props) => {
    
    const {meals} = useFoodData()

    return (
        <div className='container'>

            <div className="row container">
                <div className="col"> 
                    <div className='row d-flex g-5'>
                        {meals
                            .filter(meal => meal.type === "Breakfast")
                            .map(meal => <BreakfastItem key={meal.id} meal={meal}></BreakfastItem>)}
                    </div>
                
            </div>
            </div>

        </div>
    );
};

export default Breakfast;