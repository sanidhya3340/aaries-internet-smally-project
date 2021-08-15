import React from 'react'
import CardData  from './CardData'
import CardDesign from './CardDesign'

export default function Cards() {
    return (
        <div className=" md:grid md:grid-flow-row sm:grid sm:gap-4 sm:grid-cols-2 sm md:grid-cols-3 md:gap-6 mt-8 md:px-4">
           { CardData.map((item) => 
                <CardDesign
                    key={item.id}
                    name={item.name}
                    date={item.date}
                    duration={item.duration}
                    desig={item.desig}
                    description={item.description}
                    imgUrl={item.imgUrl}
                />
            )}
        </div>
    )
}
