import Popup from 'reactjs-popup';
import rating_u from "./u_rating.png";
import './classification.css';

const RatingU = () => {

    return (
        <div className="modal">
            <Popup trigger={<button className="button"><img className="rating-icon" src={rating_u}
                                                            alt="Universal rating icon"></img></button>} modal>
                <div className="content">
                <span> Universal - Suitable for all.
                    <br/>
                    A U film should be suitable for audiences aged four years and over, although it is impossible
                    to predict what might upset any particular child. U films should be set within a positive framework
                    and should offer reassuring counterbalances to any violence, threat or horror. If a work is
                    particularly suitable for pre-school children, this will be indicated in the Ratings Info. </span>
                </div>
            </Popup>
        </div>
    )
};

export default RatingU;