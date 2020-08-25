import React from 'react'
import { data } from '../data'
import { CategoryItem } from "./CategoryItem";

export const Category = () => {
    return (
        <div>
            {data.map((item, index)=>(
               <CategoryItem 
               title={item.name}
               id={item.id}
               key={index}
                />)
            )}
        </div>
    )
}
