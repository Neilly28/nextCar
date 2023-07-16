const car = {
  city_mpg: 55,
  combination_mpg: 28,
};
console.log(car);

const keys = Object.keys(car);

console.log(
  keys.map((key) => {
   return {[key]: car[key];}
  })
);
