import React, { Component } from "react";

import styles from "./style.js";

const style = { backgroundColor: "#DDDDDD" };

class LocationButton extends Component {
    function
    _onLoad() {
        navigator.geolocation.getCurrentPosition(
            initialPosition => {
                this.props.onGetCoords(
                initialPosition.coords.latitude,
                initialPosition.coords.longitude
                );
            },
            error => {
                alert(error.message);
            },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }
}

{/*render(
    <view>
        City: {navigator.geolocationgetCurrentPosition(city)}
    </view>
)*/}

export default LocationButton;
