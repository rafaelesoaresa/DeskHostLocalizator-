import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default function GoogleDivision() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Coordenadas da sede do Google
    const latitude = 37.422;
    const longitude = -122.084;

    // Define a região do mapa ao montar o componente
    mapRef.current.setCamera({ center: { latitude, longitude }, zoom: 15 });
  }, []);

  return (
    // Componente de contêiner que envolve o mapa
    <View style={mapStyles.container}>
      
      {/* MapView é o componente de mapa fornecido pelo pacote react-native-maps */}
      <MapView
        // Ref é usada para acessar métodos do componente MapView programaticamente
        ref={mapRef}
        // Estilo do mapa, definido pelos estilos do componente StyleSheet
        style={mapStyles.map}
        // Mostra a localização do usuário no mapa
        showsUserLocation={true}
        // Região inicial ao abrir o mapa
        initialRegion={{
          latitude: 37.422,
          longitude: -122.084,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        {/* Marcação no mapa - Marker representa um ponto específico no mapa */}
        <Marker
          // Coordenadas da marcação (Sede do Google)
          coordinate={{ latitude: 37.422, longitude: -122.084 }}
          // Título exibido quando a marcação é tocada
          title="Google Division"
        />
      </MapView>
    </View>
  );
}
