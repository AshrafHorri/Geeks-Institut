const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

console.log(building.numberOfFloors);

const aptsOnFloor1 = building.numberOfAptByFloor.firstFloor;
const aptsOnFloor3 = building.numberOfAptByFloor.thirdFloor;
console.log(aptsOnFloor1 + aptsOnFloor3);

const secondTenantName = building.nameOfTenants[1];
const danRooms = building.numberOfRoomsAndRent.dan[0];
console.log(`${secondTenantName} has ${danRooms} rooms.`);

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}