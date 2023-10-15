const arr = [
  "Ad",
  "Amo",
  "Amat",
  "Amamus",
  "Artis",
  "Basia",
  "Bello",
  "Bono",
  "Bonus",
  "Bona",
  "Brutus",
  "Commentarii",
  "Cuius",
  "Cui",
  "Campernia",
  "Corpus",
  "Da",
  "De",
  "Et",
  "Fillia",
  "Fillo",
  "Futurus esse",
  "Gaius",
  "Generalis",
  "Homer",
  "Ignii",
  "Imperator",
  "In",
  "Justinia",
  "Juipter",
  "Kilogram",
  "Libero",
  "Lesbia",
  "Lupercania",
  "Manus",
  "Me",
  "Mea",
  "Mille",
  "Novus",
  "Nomenclatia",
  "Omero",
  "Possunt",
  "Poema",
  "Prima",
  "Que",
  "Qui",
  "Quid",
  "Rex",
  "Regina",
  "Regis",
  "Solis",
  "Secunda",
  "Sapientia",
  "Scribi",
  "Tuscania",
  "Una",
  "Veno",
  "Veritus",
  "Vivamus",
  "Vedi",
  "Veni",
  "Veci",
  "W",
  "Xenophonus",
  "Z",
];

const sorted = function (arr: string[]): string[] {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const swap = (x: string, y: string): string[] => {
  return [x, y];
};

console.log(sorted(arr));

function dictionarySearch(arr: string[], target: string): number {
  console.log(arr.length);
  let high = arr.length;
  let low = 0;
  do {
    const mid = low + Math.floor((high - low) / 2);
    const v = arr[mid];
    // console.log(v, target, mid);
    if (v === target) {
      return mid;
    } else if (v > target) {
      console.log(v, target, "v>target");
      high = mid;
    } else {
      low = mid + 1;
    }
  } while (low < high);
  return -1;
}

console.log(dictionarySearch(sorted(arr), "Amat"));
