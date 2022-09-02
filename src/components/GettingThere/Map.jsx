import {useState} from 'react';
import BingMapsReact from 'bingmaps-react';

const Map = () => {

    const [rand, setRand] = useState(0);

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

    //
    console.log(rand);

    return (
            <BingMapsReact
                onMapReady={console.log('map loaded')}
                bingMapsKey={process.env.REACT_APP_MAP_API_KEY}
                height="20em"
                width="20em"
                pushPins={pushPins}
                viewOptions={{
                    center: {latitude: 51.504860, longitude: -0.068170},
                    zoom: 14
                }}
            />
    );
}

export default Map;
