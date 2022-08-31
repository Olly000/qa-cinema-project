import React from 'react'
import './PlacesToGo.css'

import DickensInn from '../PlacesToGo/DickensInn.jpg'
import EmiliasPasta from '../PlacesToGo/EmiliasPasta.jpg'
import naturalKitchen from '../PlacesToGo/naturalKitchen.jpg'
import Townhouse360 from '../PlacesToGo/Townhouse360.jpg'

function PlacesToGo() {
    return (
        <div className='PlacesToGo'>
            <div className='PlacesToGo-container'>
                <h1>Places-To-Go</h1>
                <p>Local bars and restaurants near to the cinema to enhance your trip and experience with us.</p>
                <div className="img-container">
                    <div className="dickensInn-container">
                    <a href="https://www.dickensinn.co.uk/" target="_blank" rel="noreferrer">
                    <img className='dickens inn' src={DickensInn} alt="/"/>
                    </a>
                    <p> The Dickens Inn is an 18th-century pub and restaurant, complete with gorgeous views of the docks, Tower Bridge, and The Shard.</p>
                    <p> Book now and receive a 20% discount to QA Cinemas.</p>
                    <p> For further information regarding bookings, please email <a href="mailto:dickens.bookings@ssp.uk.com">dickens.bookings@ssp.uk.com</a></p>
                    </div>
                    <div className="emiliasPasta-container">
                    <a href="https://www.emiliaspasta.com/" target="_blank" rel="noreferrer">
                    <img className='emilias pasta' src={EmiliasPasta} alt="/"/>
                    </a>
                    <p> Emilia's is a restaurant that culminates the founder's travels around the Emilia-Romagna region of Italy.</p>
                    <p> Book now and use our name for a free drink upon arrival.</p>
                    <p> For further information regarding bookings, please email <a href="mailto:skdocks@emiliaspasta.com">skdocks@emiliaspasta.com</a></p>
                    </div>
                    <div className="naturalKitchen-container">
                    <a href="https://www.naturalkitchen.co.uk/london-st-katharine-docks/" target="_blank" rel="noreferrer">
                    <img className='natural kitchen' src={naturalKitchen} alt="/"/>
                    </a>
                    <p> Natural Kitchen is a Deli and Bar with Cocktails.</p>
                    <p> 10% off bookings every weekday and further 5% every weekend.</p>
                    <p> For further information regarding bookings, please email <a href="mailto:stkatharine@thenaturalkitchen.com">stkatharine@thenaturalkitchen.com</a></p>
                    </div>
                    <div className="Townhouse360-container">
                    <a href="https://www.opentable.co.uk/r/townhouse-360-london" target="_blank" rel="noreferrer">
                    <img className='townhouse 360' src={Townhouse360} alt="/"/>
                    </a>
                    <p> Townhouse offers a fusion of tapas style dishes ranging from contemporary British to Mediterranean fayre.</p>
                    <p> Every Tuesday, 30% off restaurant after booking the cinema.</p>
                    <p> For further information regarding bookings 07584 321163</p>
                    </div>
                    
                </div>
            </div>
        </div>

    )

}

export default PlacesToGo