import Popup from 'reactjs-popup';
import rating_18 from './18_rating.png';
import './classification.css';

const Rating18 = () => {

    return (
        <div className="modal">
            <Popup trigger={<button className="button"><img className="rating-icon" src={rating_18}
                                                            alt="18 rating icon"></img></button>} modal>
                <div className="content">
                <span> 18 - Suitable only for 18 years and over
                    <br/>
                    No one younger than 18 may see a 18 film in a cinema. No one younger than 15 may rent or buy a 18 rated video work. </span>
                </div>
            </Popup>
        </div>
    )
};

export default Rating18;