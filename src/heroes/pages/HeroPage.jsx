import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroByID } from "../helpers/getHeroByID";

export const HeroPage = () => {
    const { heroID } = useParams();
    const hero = useMemo(() => getHeroByID(heroID), [heroID]);
    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1);
    }
    if (!hero) {
        return <Navigate to="/" />
    }
    return (

        <div className="row mt-5 animate__animated animate__fadeInRight">
            <div className="col-4">
                <img src={`/assets/${heroID}.jpg`} alt={hero.superhero} className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3 className="animate__animated animate__bounceInLeft animate__delay-1s">{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}>
                    Regresar
                </button>
            </div>
        </div>
    )
}
