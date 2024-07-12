function realPic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg `;
}
const fakepic = "https://thispersondoesnotexist.com/";
// showing the imags

const imgContainer = document.getElementById("images");
const resContainer = document.getElementById("result");
function draw() { 
  imgContainer.innerHTML = "";
  resContainer.innerHTML = "";
    const randomBool = Math.random() > 0.5;
const arr = [ randomBool , !randomBool];
const again = document.createElement("button");
again.innerHTML = " Play Again! " ; 
again.onclick = draw ; 
    for ( const isReal of arr ) {
        const img = document.createElement("img");
        img.src = isReal ? realPic() : fakepic ; 
        imgContainer.appendChild(img);
        img.onclick = function () { 
          if (isReal) { 
            resContainer.innerHTML = "congar...:)";
          } else {
             resContainer.innerHTML = " try again " ;
          }
          resContainer.appendChild(again);
        };
    }
    
//random pic
}
draw();



