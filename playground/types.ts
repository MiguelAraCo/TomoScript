type Dog = {
  name: string;
}

function getName(dog:Dog):string | undefined {
  if(typeof dog === "object") {
    if('name' in dog) {
      if(typeof dog.name === "string") {
        return dog.name;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

getName(6);
getName("asdasd");
getName({

});
getName([]);
getName({
  name: []
});
getName({
  name: "Lima"
});
