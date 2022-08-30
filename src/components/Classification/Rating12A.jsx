import Popup from 'reactjs-popup';
import rating_12A from './12a_rating.png';
import './classification.css';

const Rating12A = () => {

    return (
        <div className="modal">
            <Popup trigger={<button className="button"><img className="rating-icon" src={rating_12A}
                                                            alt="12A rating icon"></img></button>} modal>
                <div className="content">
                <span> 12A - Suitable only for those 12 and over if unaccompanied by an adult
                    <br/>
                    Films classified 12A and video works classified 12 contain material that is not generally suitable
                    for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied
                    by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether
                    the film is suitable for that child. To help them decide, we recommend that they check the Ratings
                    Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work. </span>
                </div>
            </Popup>
        </div>
    )
};

export default Rating12A;