/* I had to make this converted because the coordinates that I had were bad and I didn't want to input all of them again manually 
    What I had was something like: 

    Latitude: N42 33.236

    Longitude: E1 35.294


Latitude = 42 + (33.236 / 60)
= 42 + 0.5539333
= 42.5539333

Longitude = 1 + (35.294 / 60)
= 1 + 0.5882333
= 1.5882333
*/

export function coordsConverter(lat, long) {
  const convert = (coord) => {
    const degrees = Math.floor(coord);
    const minutes = (coord - degrees) * 100;
    return degrees + minutes / 60;
  };

  console.log({
    lat: convert(lat),
    long: convert(long),
  });
}
