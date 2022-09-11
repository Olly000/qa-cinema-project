import Popup from 'reactjs-popup';
import rating_12 from './12_rating.png';
import './classification.css';

const Rating12 = () => {

    return (
        <div className="modal">
            <Popup trigger={<button className="button"><img className="rating-icon" src={rating_12}
                                                            alt="12 rating icon"></img></button>} modal>
                <div className="content">
                <span> 12 - Suitable only for those 12 years and over
                    <br/>
                    Films classified 12 and video works classified 12 contain material that is not generally suitable
                    for children aged under 12. No one younger than 12 may see a 12 film in a cinema No one younger
                    than 12 may rent or buy a 12 rated video work. </span>
                </div>
            </Popup>
        </div>
    )
};

export default Rating12;