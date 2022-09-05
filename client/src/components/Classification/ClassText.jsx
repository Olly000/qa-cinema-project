import RatingU from "./RatingU";
import RatingPG from "./RatingPG";
import Rating12A from "./Rating12A";
import Rating12 from "./Rating12";
import Rating15 from "./Rating15";
import Rating18 from "./Rating18";

//import './classification.css';


const ClassText = () => {


    return (
        <section className="venuesContainer">
            <p> There are six main film classifications for films rated in the Uk. These ratings are carried out by the
                British Board of Film Classification (B.B.F.C.) and are defined below, click the icon for further
                details
            </p>
            <figure className="classFigure">
                <RatingU/>
                <figcaption> Universal - suitable for all</figcaption>
            </figure>
            <figure className="classFigure">
                <RatingPG/>
                <figcaption> Parental Guidance</figcaption>
            </figure>
            <figure className="classFigure">
                <Rating12A/>
                <figcaption> Suitable for 12 years and over or under 12 years when accompanied by an adult</figcaption>
            </figure>
            <figure className="classFigure">
                <Rating12/>
                <figcaption> Suitable only for 12 years and over</figcaption>
            </figure>
            <figure className="classFigure">
                <Rating15/>
                <figcaption> Suitable only for 15 years and over</figcaption>
            </figure>
            <figure className="classFigure">
                <Rating18/>
                <figcaption> Suitable only for 18 years and over</figcaption>
            </figure>
        </section>
    )
}

export default ClassText;