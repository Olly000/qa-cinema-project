import React from 'react';
import BingMapsReact from 'bingmaps-react';

const Map = () => {

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
            bingMapsKey='Ah_VEsrpAML8op6IOZ0g3b8d-czZ7uDps3SAcAXYver7MCvmUj60LMX9kmxH-kd3'
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
