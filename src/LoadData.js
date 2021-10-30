export function LoadAreaData(f) {
  fetch("/data/area.json")
    .then((response) => response.json())
    .then((data) => {
      f(data);
    });
}
