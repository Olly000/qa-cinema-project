import {useState} from 'react';
import BingMapsReact from 'bingmaps-react';

const Map = () => {

    const [bingMapReady, setBingMapReady] = useState(false) // added a new state to use in bingmapsreact

    const pushPin = {
        center: {
            latitude: 51.504860,
            longitude: -0.068170,
        },
        options: {
            title: "QA Cinema Tower Bridge",
        },
    }

    const pushPins = [pushPin];


    return (
        <BingMapsReact
            pushPins={bingMapReady ? pushPins : null}
            onMapReady={function () {
                setBingMapReady(true)
            }}
            bingMapsKey={process.env.REACT_APP_MAP_API_KEY}
            height="20em"
            width="20em"


            viewOptions={{
                center: {latitude: 51.504860, longitude: -0.068170},
                zoom: 14
            }}
        />
    );
}

export default Map;
