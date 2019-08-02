let copyName = () => {
  let toCopy = document.getElementById("cuteName");
  toCopy.select();
  document.execCommand("copy");
};

let generateName = () => {
  let length = parseInt($("#length").val());
  if (length < 1 || length > 5) {
    alert("Error, incorrect length");
  } else if (!length) {
    alert("Invalid length entered");
  } else {
    let name = getCuteName(length);
    $("#cuteName").val(name);
  }
};

let getCuteName = length => {
  const nameArray = [
    "Doll",
    "Queen",
    "Juliet",
    "Daisy",
    "Happiness",
    "Kitten",
    "Boo",
    "Button",
    "Angel",
    "Magic",
    "Pink",
    "Donut",
    "Cuddles",
    "Summer",
    "Bub",
    "Gorgeous",
    "Lover-Girl",
    "Honey",
    "Cinderella",
    "Hot-stuff",
    "Pretty lady",
    "Sunshine",
    "Sweet-heart",
    "Precious",
    "Hot Mama",
    "Bright eyes",
    "Cookie",
    "Love",
    "Lucky charm",
    "Cutie-pie",
    "Darling",
    "Dream-girl",
    "Lamb",
    "Cupcake",
    "Spring",
    "Lemon",
    "Rose",
    "Hop",
    "Joy",
    "Melody",
    "Sprinkles",
    "Cherry",
    "Babe",
    "Snuggly",
    "Pumpkin",
    "Dove",
    "Peach",
    "Honey",
    "Hon’",
    "Honey Bunch",
    "Candy",
    "Caramel",
    "Gummie Bear",
    "Gummy Bear",
    "Peaches",
    "Peach-o",
    "Peachy Pie",
    "Pumpkin",
    "Pumpkin pie",
    "Butter Cup",
    "Cherry",
    "Cookie",
    "Cookie Monster",
    "Sugar",
    "Sugar Lips",
    "Sugar Plum",
    "Sweetie",
    "Sweetheart",
    "Sweetness",
    "Sweet Heart",
    "Kit Kat",
    "Tootsie Roll",
    "Lolipop",
    "Fruit Loop",
    "Donut",
    "Monkey Muffins",
    "Cupcake",
    "Waffles",
    "Sprinkles",
    "Cuddle Cake",
    "Dumpling",
    "Sweet Butt",
    "Sweet Cakes",
    "Sweet Pea",
    "Sweetie Pie",
    "Sweetkins",
    "Sugar Smacks",
    "Snuggle Muffin",
    "Honey Bee",
    "Jellybean",
    "Love Muffin",
    "Yummy",
    "Toffee",
    "Marshymallow",
    "Marshmallow",
    "Skittle",
    "Almond Joy",
    "M&M",
    "Hershey’s",
    "Rolo",
    "Sweet Potato",
    "Snickers",
    "Twix",
    "Shortcake",
    "Brown Sugar",
    "Oreo",
    "Cream",
    "Eyecandy",
    "Cuddle Muffin",
    "Cinnamon",
    "Cinnamon Girl",
    "Blueberry Pie",
    "Sugar Mouse",
    "Sugar Sauce",
    "Tic Tac",
    "Candy Cane",
    "Sugar Bomb",
    "Pudding Pop",
    "Snuggle Pie"
  ];
  let toReturn = [];
  for (let i = 0; i < length; i++) {
    let nameIndex = Math.floor(Math.random() * nameArray.length);
    while (toReturn.includes(nameArray[nameIndex])) {
      console.log("checking ", nameIndex);
      nameIndex = Math.floor(Math.random() * nameArray.length);
    }
    toReturn.push(nameArray[nameIndex]);
  }

  return toReturn.join(" ");
};
