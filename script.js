const pickButton = document.querySelector("#pick-color");
const selectedColor = document.querySelector("#selectedColor");
const storedColor = localStorage.getItem("selectedColor") || "";

//Function to pick color 
const pickColor = async ()=>{
    try{
        document.body.style.display = "none";
        const eyeDropper = new EyeDropper();
        const {sRGBHex} = await eyeDropper.open();
        navigator.clipboard.writeText(sRGBHex);
        localStorage.setItem("selectedColor", sRGBHex);
        document.body.style.display = "block";
        selectedColor.textContent = sRGBHex;
        selectedColor.style.background = sRGBHex;
    }catch(error){
        alert(error);
    }
}
//Function to load Previously Picked Color
const loadPreviousColor = async()=>{
    try{
        console.log(storedColor)
        selectedColor.textContent = storedColor;
        selectedColor.style.background = storedColor;
    }catch(error){
        alert(error);
    }
}
//Load Previously Picked Color
loadPreviousColor();
//Click Event of PickButton
pickButton.addEventListener("click", pickColor);