const pick = (list, keys) => {
    var newlist = new Object();
      for(var key in keys) {
        var val = keys[key];
  
        if(list[val] !== undefined) {
         newlist[val]  = list[val] ;
        }
      }
    return newlist;
  }
  
  var user = {
   name: 'Sergey',
   age: 30,
   email: 'sergey@gmail.com',
   friends: ['Sveta', 'Artem']
  }
  
  console.log(pick(user, ['name', 'friends']));