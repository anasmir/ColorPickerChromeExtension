const pickButton = document.querySelector("#pick-color")
const selectedColor = document.querySelector("#selectedColor")

const pickColor = async ()=>{
    try{
        document.body.style.display = "none";
        const eyeDropper = new EyeDropper();
        const {sRGBHex} = await eyeDropper.open();
        navigator.clipboard.writeText(sRGBHex)
        document.body.style.display = "block";
        selectedColor.textContent = sRGBHex;
        selectedColor.style.background = sRGBHex;
    }catch(error){
        alert(error)
    }
}

pickButton.addEventListener("click", pickColor)