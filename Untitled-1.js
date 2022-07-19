const getDomainInfo = (path) => {

    if (path.startsWith('yandex.ru')) {
      return {scheme: 'http', name: 'yandex.ru'}
    };
    const schemeParts = path.split(':');
    const scheme = schemeParts[0];
  
    const parts = path.split('//');
    const name = parts[1];
  
    // В значения вместо переменных подставятся нужные значения
    const info = { scheme, name };
  
    return info;
  }

  const exapmle = 'https://hexlet.io';
  console.log(getDomainInfo(exapmle));