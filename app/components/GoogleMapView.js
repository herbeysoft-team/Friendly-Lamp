import { View, Text } from "react-native";
import React, {useState} from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { FONTS, SIZES, COLORS } from "../constant";

export default function GoogleMapView() {
    const [mapRegion, setmapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
    });
  return (
    <View style={{marginTop:SIZES.base}}>
      <MapView
        style={{
          width: SIZES.wp(90),
          height: SIZES.hp(30),
          borderRadius: SIZES.radius,
        }}
        provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
      >
         <Marker 
            title="You" 
            coordinate={mapRegion}
             />
      </MapView>
    </View>
  );
}
