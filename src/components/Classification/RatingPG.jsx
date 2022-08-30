import Popup from 'reactjs-popup';
import rating_pg from "./pg_rating.png";
import './classification.css';

const RatingPG = () => {

    return (
        <div className="modal">
            <Popup trigger={<button className="button"><img className="rating-icon" src={rating_pg}
                                                            alt="Universal rating icon"></img></button>} modal>
                <div className="content">
                <span> PG - Parental Guidance
                    <br/>
                    General viewing, but some scenes may be unsuitable for young children. A PG film should not
                    unsettle a child aged around eight or older. Unaccompanied children of any age may watch, but
                    parents are advised to consider whether the content may upset younger, or more sensitive, children. </span>
                </div>
            </Popup>
        </div>
    )
};

export default RatingPG;