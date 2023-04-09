import React from "react";
import { coordinates } from "../pages/Home/Home";

const Map = ({coordinates}: {coordinates: coordinates}) => {
    const { coordX, coordY } = coordinates
    return (<div>
        <iframe src = {`https://yandex.ru/map-widget/v1/?ll=${coordX}%2C${coordY}&mode=whatshere&whatshere%5Bpoint%5D=${coordX}%2C${coordY}&whatshere%5Bzoom%5D=16.21&z=16.21`}
        height="620" className="block fullScreen border"></iframe>
    </div>);
}
    

export default Map;