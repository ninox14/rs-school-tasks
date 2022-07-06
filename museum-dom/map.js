mapboxgl.accessToken =
  "pk.eyJ1Ijoibmlub3giLCJhIjoiY2t1bGJveWloMDgxaDJucGZ2Mmc2em4xdCJ9.a80bZMM4xeQqaQpqLGUXqg";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/light-v10", // style URL
  center: [2.3364, 48.86091], // starting position [lng, lat]
  zoom: 15.75, // starting zoom
});
const marker1 = new mapboxgl.Marker({ color: "black", })
  .setLngLat([2.3364, 48.86091])
  .addTo(map);

// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({color: 'grey'})
  .setLngLat([2.3333, 48.8602])
  .addTo(map);
const marker3 = new mapboxgl.Marker({ color: "grey" })
  .setLngLat([2.3397, 48.8607])
  .addTo(map);
const marker4 = new mapboxgl.Marker({ color: "grey" })
  .setLngLat([2.333, 48.8619])
  .addTo(map);
const marker5 = new mapboxgl.Marker({ color: "grey" })
  .setLngLat([2.3365, 48.8625])
  .addTo(map);
map.addControl(new mapboxgl.NavigationControl());