import "./style.css";
const mainImage = require("./img/p1.png");
const father = document.getElementById("main")

const mainImage1 = document.createElement("img");
mainImage1.src = mainImage,
mainImage1.classList.add("p1")
father.appendChild(mainImage1)
const nav = document.createElement("nav")
nav.classList.add("nav")
const button = document.createElement("button")
button.innerText = "تواصل";
button.id="b1"
father.appendChild(nav)
nav.appendChild(button)

const button2 = document.createElement("button")
button2.innerHTML="قائمة الطعام";
nav.appendChild(button2);
button2.id="b2"

const button3 = document.createElement("button")
button3.innerHTML="رئيسية";
nav.appendChild(button3);
button3.id="b3"

const father2 = document.getElementById("content")
const section1 = document.createElement("section");
father2.appendChild(section1);
section1.classList.add("about")
section1.id="about"
const sectionText1 = document.createElement("h2")
section1.appendChild(sectionText1)
sectionText1.innerHTML="مرحباً بك في مطعم باندا";
const sectionText2 = document.createElement("p")
section1.appendChild(sectionText2);
sectionText2.innerHTML=
`
            تجربة فريدة من المذاق العربي والغربي في مكان واحد
            نقدّم أشهى الأطباق الشرقية والغربية<br> باستخدام أفضل المكونات الطازجة، بطابع عصري  و عنواننا
`;
const sectionText3 = document.createElement("h3")
section1.appendChild(sectionText3);
sectionText3.innerHTML=`"كول ودلل كرشك"`
const sectionText4 = document.createElement("h3")
section1.appendChild(sectionText4);
sectionText4.innerHTML=`المدير باندا`
sectionText4.id="panda"

const section2 = document.createElement("section")
father2.appendChild(section2)
section2.classList.add("menu")
section2.id = "menu"
const section2Text = document.createElement("h2")
section2Text.innerHTML=`قائمة الطعام`
section2.appendChild(section2Text)

const menuMain = document.createElement("div");
menuMain.classList.add("menuMain");
section2.appendChild(menuMain);

const menuItem1 = document.createElement("div")
menuItem1.classList.add("menu-item")
menuMain.appendChild(menuItem1);
const item1Img = document.createElement("img")
menuItem1.appendChild(item1Img);
const shawrmaImg = require("./img/shawrma.jpeg");
item1Img.src = shawrmaImg;
const item1Text = document.createElement("h3")
menuItem1.appendChild(item1Text)
item1Text.innerHTML=`شاورما دجاج`
const item1Text2 = document.createElement("p")
menuItem1.appendChild(item1Text2)
item1Text2.innerHTML=`$1.15`

const menuItem2 = document.createElement("div")
menuItem2.classList.add("menu-item")
menuMain.appendChild(menuItem2);
const item2Img = document.createElement("img")
menuItem2.appendChild(item2Img);
const shawrma2Img = require("./img/shawrma2.jpeg");
item2Img.src = shawrma2Img;

const item2Text = document.createElement("h3")
menuItem2.appendChild(item2Text)
item2Text.innerHTML=`وجبة شاورما عربي`
const item2Text2 = document.createElement("p")
menuItem2.appendChild(item2Text2)
item2Text2.innerHTML=`$3.50`

const menuItem3 = document.createElement("div")
menuItem3.classList.add("menu-item")
menuMain.appendChild(menuItem3);
const item3Img = document.createElement("img")
menuItem3.appendChild(item3Img);
const crispyImg = require("./img/crispy.jpeg");
item3Img.src = crispyImg;
const item3Text = document.createElement("h3")
menuItem3.appendChild(item3Text)
item3Text.innerHTML=`وجبة كريسبي`
const item3Text2 = document.createElement("p")
menuItem3.appendChild(item3Text2)
item3Text2.innerHTML=`$5.00`

const menuItem4 = document.createElement("div")
menuItem4.classList.add("menu-item")
menuMain.appendChild(menuItem4);
const item4Img = document.createElement("img")
menuItem4.appendChild(item4Img);
const zengarImg = require("./img/zengar.jpeg");
item4Img.src = zengarImg;
const item4Text = document.createElement("h3")
menuItem4.appendChild(item4Text)
item4Text.innerHTML=`زنجر`
const item4Text2 = document.createElement("p")
menuItem4.appendChild(item4Text2)
item4Text2.innerHTML=`$3.50`

const footer = document.createElement("footer");
father2.appendChild(footer)
const footerText = document.createElement("p");
footer.appendChild(footerText)
footerText.innerHTML=`© 2025 مطعم باندا. جميع الحقوق محفوظة.`

const home = document.getElementById("b3")
const menu = document.getElementById("b2")
const contant = document.getElementById("b1")

// function home(){

// }
// function menu (){

// }
// function contant(){

// }
