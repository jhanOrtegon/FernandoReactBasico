import React from "react";
import { Link } from "react-router-dom";

export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const imgPath = `/assets/imgs/${id}.jpg`;
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={imgPath} alt={superhero} className='w-100' />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-tittle">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) &&
                                <p className="text-muted">{characters}</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`} className='btn btn-sm w-50 btn-secondary'>
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
