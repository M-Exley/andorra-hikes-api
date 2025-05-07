export default function destructure(object) {
  const {
    trail,
    number,
    difficulty,
    area,
    duration,
    loop,
    elevation,
    distance,
    lake,
    toponymy,
    // marker,
    lat,
    long,
  } = object;

  return {
    trail,
    number,
    difficulty,
    area,
    duration,
    loop,
    elevation,
    distance,
    lake,
    toponymy,
    // marker,
    lat,
    long,
  };
}
