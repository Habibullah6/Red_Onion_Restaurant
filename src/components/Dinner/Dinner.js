
import useFoodData from '../../hooks/useFoodData';
import DinnerItem from '../DinnerItem/DinnerItem';

const Dinner = () => {
   const {meals} = useFoodData();


    return (
        <div className='container'>
        <div className="row container">
            <div className="col"> 
                <div className='row d-flex g-5'>
                    {meals
                        .filter(meal => meal.type === "Dinner")
                        .map(meal => <DinnerItem key={meal.id} meal={meal}></DinnerItem>)}
                </div>
            
        </div>
        </div>

    </div>
    );
};

export default Dinner;