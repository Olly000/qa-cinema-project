import rating_u from './u_rating.png';
import rating_pg from './pg_rating.png';
import rating_12a from './12a_rating.png';
import rating_12 from './12_rating.png';
import rating_15 from './15_rating.png';
import rating_18 from './18_rating.png';

import './classification.css';
import Popup from 'reactjs-popup';


const ClassText = () => {


    return(
        <section>
            <p> There are six main film classifications for films rated in the Uk.  These ratings are carried out by the
            British Board of Film Classification (B.B.F.C.) and are defined below, click the icon for further details
            </p>
            <figure className="classFigure">
            <img className="rating-icon" src={rating_u} alt="Universal rating icon"></img>
            <figcaption> Universal - suitable for all </figcaption>
            </figure>
            <figure className="classFigure">
                <img className="rating-icon" src={rating_pg} alt="PG rating icon"></img>
                <figcaption> Parental Guidance </figcaption>
            </figure>
            <figure className="classFigure">
                <img className="rating-icon" src={rating_12a} alt="12a rating icon"></img>
                <figcaption> Suitable for 12 years and over or under 12 years when accompanied by an adult  </figcaption>
            </figure>
            <figure className="classFigure">
                <img className="rating-icon" src={rating_12} alt="12 rating icon"></img>
                <figcaption> Suitable only for 12 years and over </figcaption>
            </figure>
            <figure className="classFigure">
                <img className="rating-icon" src={rating_15} alt="15 rating icon"></img>
                <figcaption> Suitable only for 15 years and over </figcaption>
            </figure>
            <figure className="classFigure">
                <img className="rating-icon" src={rating_18} alt="18 rating icon"></img>
                <figcaption> Suitable only for 18 years and over </figcaption>
            </figure>
        </section>
    )
}

export default ClassText;