f = document.getElementById("mobile");

// TOPPINGS FUNCTIONS //
function toppingSprinkle() {
  document.getElementById("topping-display").src = "pictures/sprinkles.png";
  document.getElementById("sprinkleeffect").play();
}
function toppingChocol() {
  document.getElementById("topping-display").src = "pictures/chocosyrup.png";
  document.getElementById("sprinkleeffect").play();
}
function toppingGummi() {
  document.getElementById("topping-display").src = "pictures/gummybears.png";
  document.getElementById("sprinkleeffect").play();
}
function toppingMarshies() {
  document.getElementById("topping-display").src = "pictures/marshmellows.png";
  document.getElementById("sprinkleeffect").play();
}

// ICE CREAM FUNCTIONS //

function iceCreamVanilla() {
  document.getElementById("nieve-display").src = "pictures/vanilla.png";
  document.getElementById("slurpeffect").play();
}

function iceCreamMint() {
  document.getElementById("nieve-display").src = "pictures/mint.png";
  document.getElementById("slurpeffect").play();
}
function iceCreamCookies() {
  document.getElementById("nieve-display").src = "pictures/cookiesandcream.png";
  document.getElementById("slurpeffect").play();
}
function iceCreamCherry() {
  document.getElementById("nieve-display").src = "pictures/cherry.png";
  document.getElementById("slurpeffect").play();
}
function iceCreamMonster() {
  document.getElementById("nieve-display").src = "pictures/monster.png";
  document.getElementById("slurpeffect").play();
}

// CUP OR CONE FUNCTIONS //

function holderCup() {
  document.getElementById("holderz-display").src = "pictures/cup.png";
  document.getElementById("thudeffect").play();
}
function holderCone() {
  document.getElementById("holderz-display").src = "pictures/cone.png";
  document.getElementById("thudeffect").play();
}

function startOver() {
  document.getElementById("topping-display").src = "pictures/newbaskin.png";
  document.getElementById("nieve-display").src = "pictures/newbaskin.png";
  document.getElementById("holderz-display").src = "pictures/newbaskin.png";
  document.getElementById("my-click").play("");
  // removes the transparency that was added in the startOverWithDelay function
}
function soundTopping() {
  document.getElementById("sprinkleeffect").play();
}
