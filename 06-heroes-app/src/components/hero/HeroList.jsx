import React from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroeCard } from "./HeroeCard";

const HeroList = ({ publisher }) => {
    const heroesPublisher = getHeroesByPublisher(publisher);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroesPublisher.map(hero => (
                    <HeroeCard key={hero.id} {...hero} />
                ))
            }
        </div>
    );
};

export default HeroList;
