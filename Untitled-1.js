const fill = (obj1, word, obj2) => {
  let obj3 = _.pick(obj2, [word]);
  // const items = Object.entries(obj2);
  // for (const key in items) {
    //if (key === word) { 
  Object.assign(obj1, obj3);
  
return obj1;
}

const company = {
  name: null,
  state: 'moderating',
};
 
const data = {
  name: 'Hexlet',
  state: 'published',
};

console.log(fill(company, ['name'], data));
