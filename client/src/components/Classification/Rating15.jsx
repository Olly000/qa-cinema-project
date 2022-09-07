import Popup from 'reactjs-popup';
import rating_15 from './15_rating.png';
import './classification.css';

const Rating15 = () => {

    return (
        <div className="modal">
            <Popup trigger={<button className="button"><img className="rating-icon" src={rating_15}
                                                            alt="15 rating icon"></img></button>} modal>
                <div className="content">
                <span> 15 - Suitable only for 15 years and over
                    <br/>
                    No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work. </span>
                </div>
            </Popup>
        </div>
    )
};

export default Rating15;