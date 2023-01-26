import React, { Fragment } from 'react';


import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';



const Meals = prop => {
    return (
    <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>
    )
};

export default Meals;