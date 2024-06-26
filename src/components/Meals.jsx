"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const Meals = () => {

    const [search, setSearch] = useState("a ")
    const [error, setError] = useState("")
    const [meals, setMeals] = useState([])

    const handler = e => {
        setSearch(e.target.value)
    }

    const loadData = async () => {

        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json()
            setMeals(data.meals)
            setError("")
        }
        catch (error) {
            setError("No Data Found .......... ")
        }
    }


    useEffect(() => {
        loadData()
    }, [])


    return (
        <>

            <div className='mt-7'>
                <input
                    onChange={handler}
                    type="text"
                    placeholder='search your meal'
                    className='text-xl text-black p-2'
                />
                <button
                    className='bg-cyan-400 text-xl p-2'
                    onClick={() => loadData()}
                >search</button>
            </div>
            <div className='mt-5 grid grid-cols-3 gap-3'>
                {
                    meals.length > 0 && !error && meals?.map(meal => (
                        <div key={meal.idMeal} className='border-2 border-cyan-400'>

                            <Image width={400} height={400} src={meal.strMealThumb} alt={meal.strMeal}></Image>

                            <h1>{meal.strCategory}</h1>
                            <h1>{meal.strMeal}</h1>
                        </div>
                    ))
                }
                {
                    error && <h6>{error}</h6>
                }
            </div>

        </>
    );
};

export default Meals;