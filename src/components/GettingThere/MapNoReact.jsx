

const Map2 = () => {

    const mapSdk = `http://sdk.virtualearth.net/api/maps/mapcontrol?callback=GetMap&key=${process.env.REACT_APP_MAP_API_KEY}`
    const getMap = () => {
        const map = new Microsoft.Maps.Map('#myMap');
    }

    return(
        <>
    <script type='text/javascript'
            src={mapSdk}
            async defer></script>
            <script type='text/javascript'>
                {getMap()}
            </script>
            <div id="myMap"></div>
            </>
    )
}

export default Map2;