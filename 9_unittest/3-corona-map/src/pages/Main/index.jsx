import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
  Annotation,
} from 'react-simple-maps';

const geoUrl = 'https://ismailarilik.com/react-covid-maps/geo.json';

const Main = () => {
  const [geo, setGeo] = useState();

  return (
    <div className="h-[calc(100vh-74px)] flex-1 text-white overflow-hidden bg-zinc-800 flex flex-col justify-center items-center wrapper md:pt-20">
      <h6 className="px-6 pb-6">Detay Görüntüle: {geo?.properties?.name}</h6>

      <ComposableMap
        height={1000}
        projectionConfig={{ rotate: [-10, 0, 0], scale: 287 }}
      >
        <ZoomableGroup>
          <Sphere stroke="gray" strokeWidth={0.3} />
          <Graticule stroke="gray" strokeWidth={0.3} />

          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Link to={`/detail?code=${geo.id}`} key={geo.rsmKey}>
                  <Geography
                    onMouseEnter={() => setGeo(geo)}
                    onMouseLeave={() => setGeo(null)}
                    geography={geo}
                    style={{
                      default: {
                        fill: '#EEE',
                      },
                      hover: {
                        fill: 'rgb(54 197 94)',
                      },
                      pressed: {
                        fill: 'rgb(14 147 105)',
                      },
                    }}
                  />
                </Link>
              ))
            }
          </Geographies>

          {/* hoverlanan bir eleman varsa üzerinde ülke ismini göster */}
          {geo && (
            <Annotation
              subject={geo.geometry.coordinates[0][0]}
              dx={-90}
              dy={-30}
              style={{
                zIndex: 999999999,
              }}
              connectorProps={{
                stroke: '#FF5533',
                strokeWidth: 3,
                strokeLinecap: 'round',
                zIndex: 999999999,
              }}
            >
              <text
                x="-8"
                textAnchor="end"
                alignmentBaseline="middle"
                fill="#F53"
              >
                {geo.properties.name}
              </text>
            </Annotation>
          )}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default Main;
