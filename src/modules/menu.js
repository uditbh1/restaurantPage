import menuimg from "../imgs/menu.jpg"
const content=document.getElementById("content")
function createMenuPage(){
    let img=document.createElement("img");
    img.src=menuimg;
    img.id="menuimg"
    content.appendChild(img)
    let p=document.createElement("p")
    p.id="menutext"
    p.textContent="At The Garden Bistro, our menu is more than just a list of dishes—it's a culinary journey designed to celebrate flavor, innovation, and the beauty of locally-sourced ingredients. Every item on our menu is thoughtfully crafted, blending time-honored recipes with a modern twist to create a dining experience that is both familiar and delightfully surprising. We take pride in our seasonal approach, ensuring that each dish showcases the freshest produce and highest-quality ingredients available. Our culinary team draws inspiration from global influences, resulting in a diverse selection that caters to a wide range of tastes and dietary preferences. From the first bite of our artfully composed appetizers to the lingering finish of our decadent desserts, every course is an invitation to savor the art of fine dining. Whether you're seeking a comforting meal or an adventurous exploration of flavors, our menu is designed to engage all the senses and create unforgettable moments. We invite you to experience the passion and creativity that go into every dish—each one a celebration of food, community, and the joy of dining well."
    content.appendChild(p)
}
export default createMenuPage;