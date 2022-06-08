
import useFoodData from '../../hooks/useFoodData';
import LunchItem from '../LunchItem/LunchItem';

const Lunch = () => {
   
    const {meals} = useFoodData();
    return (
        <div className='container'>
                <div className="row container">
                <div className="col">
                    <div className='row d-flex g-5'>
                        {meals
                            .filter(meal => meal.type === "Lunch")
                            .map(meal => <LunchItem key={meal.id} meal={meal}></LunchItem>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lunch;