const cars = {
  marks: [
    'Bmw',
    'Audi',
    'Mazda',
    'Volvo',
    'Honda',
    'Huanday',
    'Mercedes-benz',
    'Ferrari',
    'Kia',
    'Missan',
    'Honda',
    'Renault',
    'Porsche',
    'Tesla',
    'Skoda',
    'Toyota',
  ],
  models: [
    'Rx',
    'X7',
    'Avela',
    'M22',
    'S63',
    'Capital',
    'GT',
    '488',
    'CR-V',
    'Type-R',
    'City',
    'R34',
    'Civic',
    'Fabia',
    'Scout',
    '570',
    'Model x',
    '499',
  ],
};

const randomColor = (min = 0, max = 255) => {
  const random = () => min + Math.floor(Math.random() * (max - min + 1));

  const r = random();
  const g = random();
  const b = random();

  return `rgb(${r},${g},${b})`;
};

export default function generateRandomCars() {
  const { marks, models } = cars;
  const randomCars = [];
  for (let i = 0; i < 100; i += 1) {
    const newRandomCar = {
      name: `${marks[Math.floor(Math.random() * marks.length)]} ${models[Math.floor(Math.random() * models.length)]}`,
      color: randomColor(),
    };

    randomCars.push(newRandomCar);
  }

  return randomCars;
}
