const make = (name, data) => {
  const other = {state: 'moderating', ...data};
  const createdAt = Date.now();
  const mergedObject2 = { name, ...other, createdAt };

return mergedObject2;
}



console.log(make('Hexlet', {state: 'published'}));




