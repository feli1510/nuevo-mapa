
import { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

export default function MapaGeneral() {
  const viewRef = useRef(null);
  const layerRef = useRef(null);
  let webmap;
  let foundLayer;
  let view;

  useEffect(() => {
    const loadMap = async () => {
      loadModules(["esri/WebMap", "esri/views/MapView"], { css: true })
        .then(async ([WebMap, MapView]) => {
          webmap = new WebMap({
            portalItem: {
              id: "d5e02a0c1f2b4ec399823fdd3c2fdebd",
            },
          });

          view = new MapView({
            container: "mapDiv",
            map: webmap,
            center: [-74.05092, 4.67388],
            zoom: 20
            
          });

          webmap.load().then(() => {
            viewRef.current = view;
          });
        })
        
    };
    loadMap();
  }, []);

  return (
    <div className="contenedor-mapa">
      <div
        id="mapDiv"
        className="recuadro-mapa"
        style={{ height: "800px", width: "100%" }}
      ></div>
    </div>
  );
}
