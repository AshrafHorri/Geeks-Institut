const family = {
    father: "John",
    mother: "Jane",
    son: "Mike",
    daughter: "Lisa"
};

for (const key in family) {
    console.log(key);
}

for (const key in family) {
    console.log(family[key]);
}