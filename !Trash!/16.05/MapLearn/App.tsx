import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  MapView, {Marker} from 'react-native-maps'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 20,
          longitudeDelta: 20,
        }} >
        <Marker coordinate={{ latitude:37.78825, longitude:-122.4324}} />
      </MapView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})