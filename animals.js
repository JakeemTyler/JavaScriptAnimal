const petsData=[
{
    petName: "Stella",
    age: 7,
    weightInKilos: 24,
    breed: "Dalmation",
    pic: "images\\stella.png"
}, 
{
    petName: "Cod",
    age: 8,
    weightInKilos: 22,
    breed: "Corgi",
    pic: "images\\cody.png"
}, 
{
    petName: "Mango",
        age: 2,
weightInKilos:11,
    breed:"Persian",
    pic: "images\\mango.png"
},
{
    petName: "Lucy",
        age: 4,
weightInKilos:35,
    breed:"Python",
    pic: "images\\lucy.png"
},
{
    petName: "Buhmie",
    age: 1,
    weightInKilos: 28,
    breed: "Bull-dog",
    pic: "images\\buhmie.png"
}
];

const showInfo = () => {

// input from user
    let inputNum = document.querySelector ("#inputNum").value;
// starts at 0
    inputNum = parseInt(inputNum)-1;

    let petTyped = document.querySelector(".typedPet");

    let pet = petsData [inputNum];

//string
    petTyped.innerHTML = `${pet.petName} is ${pet.age} years old, weighs ${pet.weightInKilos} kilos is a ${pet.breed}.`;
    console.log (`${pet.petName} is ${pet.age} years old, weighs ${pet.weightInKilos} kilos is a ${pet.breed}.`);
    let petPic = document.querySelector(".selectedPetPic");

// calls for pet picture
    petPic.src = pet.pic;
}

let newPet =  document.querySelector(".newPet");
newPet.innerHTML = ` welcome to our newest pet, 
    ${petsData[petsData.length - 1].petName} the
    ${petsData[petsData.length - 1].breed}`;
    
