import { Link } from "react-router-dom"

export const HeroCard = ({ id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters }) => {

    const heroImageUrl = `/assets/${id}.jpg`
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} alt={superhero} className="card-img" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <div className="card-title">{superhero}</div>
                            <div className="card-text">{alter_ego}</div>
                            {
                                (alter_ego !== characters) && (<p>{characters}</p>)
                            }
                            <p className="card-text">
                                <small className="text-mutted">{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                Más Información
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
