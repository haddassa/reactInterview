import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];


const AvailableMeals = () => {

  useEffect(() => {
    getMealsFromFirebase()
  }, [])

  const [mealsArr, setMealsArr] = useState([])
  const url = 'https://react-interview-api-default-rtdb.europe-west1.firebasedatabase.app/meals.json'

  const getMealsFromFirebase = () => {
    axios.get(url)
      .then((response) => {
        console.log(response)
        let newMealsArr = Object.values(response.data)
        console.log(newMealsArr);
        setMealsArr(newMealsArr)
      })
      .catch((error) => {
        console.log('error')
      })
  }

  const mealsList = mealsArr.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {/* <ul>{mealsList}</ul> */}
        {mealsArr.length > 0 ?
          mealsList
          : <h4>Not Data!</h4>
        }
      </Card>
    </section>
  );
};

export default AvailableMeals;
