import { useEffect, useState } from "react"



const useFoodData = () => {
const [meals, setMeals] = useState([])

useEffect(()=> {
fetch('foodsData.json')
.then(res => res.json())
.then(data => setMeals(data))
}, [])


return {
    meals
}

}



export default useFoodData;