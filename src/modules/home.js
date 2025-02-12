import homeimg from "../imgs/home.jpg"
const content=document.getElementById("content")
function createHomePage(){
    let img=document.createElement("img");
    img.src=homeimg;
    img.id="homeimg"
    content.appendChild(img)
    let p=document.createElement("p")
    p.id="hometext"
    p.textContent="At The Garden Bistro, we believe that great food is the heart of unforgettable moments. Our culinary experts combine locally sourced ingredients with global flavors to create dishes that delight the senses. Whether you're joining us for a casual lunch or a special dinner, we promise an experience that celebrates the art of fine dining."
    content.appendChild(p)
}
export default createHomePage;