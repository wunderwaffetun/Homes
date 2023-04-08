import React from "react";
const Map = (props) => {
    return (<div>
        <iframe src = {`https://yandex.ru/map-widget/v1/?ll=${props.state.cordX}%2C${props.state.cordY}&mode=whatshere&whatshere%5Bpoint%5D=${props.state.cordX}%2C${props.state.cordY}&whatshere%5Bzoom%5D=16.21&z=16.21`}
        height="620" className="block fullScreen border"></iframe>
    </div>);
}
    

export default Map;