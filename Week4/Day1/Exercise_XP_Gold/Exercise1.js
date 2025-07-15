const landscape = () => {
  let result = "";

  const flat = (x) => {
    const addUnderscore = () => {
      result = result + "_";
    };

    for(let count = 0; count < x; count++) {
      addUnderscore();
    }
  };

  const mountain = (x) => {
    result = result + "/";
    const addApostrophe = () => {
      result = result + "'";
    };

    for(let counter = 0; counter < x; counter++) {
      addApostrophe();
    }

    result = result + "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

console.log(landscape());
