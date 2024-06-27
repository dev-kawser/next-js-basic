import Meals from '@/components/Meals';
import React from 'react';
import styles from './styles.module.css'

export const metadata = {
    title: {
        absolute: "meals"
    },
    description: "meal page",
    keywords: ["meal", "meal page"]
};


const MealsPage = () => {

    return (
        <div className='min-h-screen p-12'>
            <h1 className={`text-3xl font-mono ${styles.font_style}`}> choose your mail here by searching .............</h1>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;