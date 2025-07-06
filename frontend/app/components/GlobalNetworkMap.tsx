// components/GlobalNetworkMap.tsx
import Image from "next/image";

const markers = [
  {
    name: "Headquarters - New Delhi, India",
    x: "78%",
    y: "42%",
    color: "bg-red-500",
    type: "HQ",
  },
  {
    name: "Office - London, UK",
    x: "51%",
    y: "32%",
    color: "bg-orange-400",
    type: "Office",
  },
  {
    name: "Office - New York, USA",
    x: "30%",
    y: "35%",
    color: "bg-orange-400",
    type: "Office",
  },
  {
    name: "Production - Shanghai, China",
    x: "86%",
    y: "38%",
    color: "bg-purple-500",
    type: "Production",
  },
];

export default function GlobalNetworkMap() {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-[400px] sm:h-[500px] bg-[#0d1b3b] rounded-xl overflow-hidden mt-6">
      <Image
        src="/images/world-map.png"
        alt="Global Map"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
        priority
      />

      {/* Markers */}
      {markers.map((marker, index) => (
        <div
          key={index}
          className={`absolute w-3 h-3 md:w-4 md:h-4 rounded-full ${marker.color} shadow-md animate-ping hover:scale-125 transition-transform duration-300`}
          style={{ left: marker.x, top: marker.y }}
          title={marker.name}
        >
          <div
            className={`absolute w-3 h-3 md:w-4 md:h-4 rounded-full ${marker.color}`}
          />
        </div>
      ))}

      {/* Legend */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-black px-4 py-2 rounded-md text-xs sm:text-sm shadow-lg flex flex-wrap gap-3 justify-center items-center">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span> Headquarters
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 bg-orange-400 rounded-full"></span> Office
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 bg-purple-500 rounded-full"></span>{" "}
          Production
        </span>
      </div>
    </div>
  );
}
