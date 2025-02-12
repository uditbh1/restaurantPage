import aboutimg from "../imgs/about.jpg"
const content=document.getElementById("content")
function createAboutPage(){
    let img=document.createElement("img");
    img.src=aboutimg;
    img.id="aboutimg"
    content.appendChild(img)
    let p=document.createElement("p")
    p.id="abouttext"
    p.textContent="At The Garden Bistro, our hospitality is the heart of the experience. We pride ourselves on creating a warm, welcoming atmosphere where every guest feels like family. From the moment you step through our door, our attentive staff is dedicated to ensuring your visit is comfortable and memorable, blending impeccable service with genuine care. Whether you're here for a casual meal or a special occasion, our commitment to hospitality transforms each encounter into a cherished moment."
    content.appendChild(p)
}
export default createAboutPage;