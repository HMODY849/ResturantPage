import "./style.css";
const mainImage = require("./img/p1.png");
const father = document.getElementById("main")
const father2 = document.getElementById("content")
const rightside = document.createElement("div")
rightside.classList.add("rightside")
father.appendChild(rightside);
const mainImage1 = document.createElement("img");
mainImage1.src = mainImage,
mainImage1.classList.add("p1")
rightside.appendChild(mainImage1)
const panda = document.createElement("h1")
panda.classList.add("panda")
rightside.appendChild(panda)
panda.innerHTML=`Panda`


const nav = document.createElement("nav")
nav.classList.add("nav")
const menuImgSrc = require("./img/m1.svg")
const menuImg = document.createElement("img")
menuImg.src = menuImgSrc
menuImg.classList.add("noneImg")
nav.appendChild(menuImg)

const button = document.createElement("button")
button.innerText = "تواصل";
button.id="b1"
button.classList.add("none");
father.appendChild(nav)
nav.appendChild(button)
const button2 = document.createElement("button")
button2.innerHTML="قائمة الطعام";
nav.appendChild(button2);
button2.id="b2"
button2.classList.add("none");
const button3 = document.createElement("button")
button3.innerHTML="رئيسية";
nav.appendChild(button3);
button3.id="b3"
button3.classList.add("none");
const humMenu = document.createElement("div");
humMenu.classList.add("none")
menuImg.addEventListener("click", function () {
    if (window.innerWidth >= 768) return;
  const isOpen = humMenu.classList.contains("humMenu");

  if (isOpen) {
    humMenu.classList.remove("humMenu");
    humMenu.classList.add("none");

    nav.appendChild(button);
    nav.appendChild(button2);
    nav.appendChild(button3);

    button.classList.add("none");
    button2.classList.add("none");
    button3.classList.add("none");
  } else {

    humMenu.classList.add("humMenu");
    humMenu.classList.remove("none");

    humMenu.appendChild(button);
    humMenu.appendChild(button2);
    humMenu.appendChild(button3);

    button.classList.remove("none");
    button2.classList.remove("none");
    button3.classList.remove("none");

    button.classList.add("btn");
    button2.classList.add("btn");
    button3.classList.add("btn");
  }

  // تأكد من إضافة humMenu إلى الصفحة
  nav.appendChild(humMenu);
});
const Home = document.getElementById("b3")
const Menu = document.getElementById("b2")
const Contant = document.getElementById("b1")

window.addEventListener("DOMContentLoaded",home)
function home(){
father2.innerHTML=``
humMenu.classList.remove("humMenu");
humMenu.classList.add("none");
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

const section2 = document.createElement("section");
father2.appendChild(section2)
section2.classList.add("about")
const openTime = document.createElement("h2")
section2.appendChild(openTime)
openTime.innerHTML=`أوقات عمل المطعم`
const times = document.createElement("p");
section2.appendChild(times)
times.innerHTML=
`
الأحد: من الساعة 8 صباحا وحتى الساعة 12 مساء<br>
الأثنين: من الساعة 8 صباحا وحتى الساعة 12 مساء<br>
الثلاثاء: من الساعة 8 صباحا وحتى الساعة 12 مساء<br>
الأربعاء: من الساعة 8 صباحا وحتى الساعة 12 مساء<br>
الخميس: من الساعة 8 صباحا وحتى الساعة 2 مساء<br>
الجمعة: من الساعة 8 صباحا وحتى الساعة 2 مساء<br>
السبت: من الساعة 8 صباحا وحتى الساعة 2 مساء<br>
`;

const section3 = document.createElement("section");
father2.appendChild(section3)
section3.classList.add("about")
const location = document.createElement("h2")
section3.appendChild(location)
location.innerHTML=`الموقع`
const locationMain = document.createElement("p");
section3.appendChild(locationMain)
locationMain.innerHTML=`اللاذقية-جبلة-العمارة-مقابل ابو اللبن`

const footer = document.createElement("footer");
father2.appendChild(footer)
const footerText = document.createElement("p");
footer.appendChild(footerText)
footerText.innerHTML=`© 2025 مطعم باندا. جميع الحقوق محفوظة.`
}
Home.addEventListener("click",home)

function menu (){
father2.innerHTML=``
humMenu.classList.remove("humMenu");
humMenu.classList.add("none");
const section2 = document.createElement("section")
father2.appendChild(section2)
section2.classList.add("menu")
section2.id = "menu"
const section2Text = document.createElement("h2")
section2Text.classList.add("food")
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
}
Menu.addEventListener("click",menu)

 function contant(){
    father2.innerHTML=``;
    humMenu.classList.remove("humMenu");
    humMenu.classList.add("none");
    const section1 = document.createElement("section");
    father2.appendChild(section1);
    section1.classList.add("about");
    const sectionText1 = document.createElement("h2")
    section1.appendChild(sectionText1)
    sectionText1.innerHTML="تواصل معنا";
    const ul = document.createElement("ul");
    section1.appendChild(ul)
    const way1 = document.createElement("li")
    const way2 = document.createElement("li")
    const way3 = document.createElement("li")
    const way4 = document.createElement("li")
    ul.appendChild(way1)
    ul.appendChild(way2)
    ul.appendChild(way3)
    ul.appendChild(way4)
    way1.innerHTML=`<p><a href="">مطعم باندا</a></p>`
    way2.innerHTML=`<p><a href="">Panda_849</a></p>`
    way3.innerHTML=`<p><a href="">panda439</a></p>`
    way4.innerHTML=`<p><a href="tel:0992097439">0992097439</a></p>`
    const facebook = require("./img/facebook.png");
    const insta = require("./img/insta.png");
    const whats = require("./img/what.png");
    const call = require("./img/call.png");
    const faceimg = document.createElement("img");
    const istaimg = document.createElement("img");
    const whatsimg = document.createElement("img");
    const callimg = document.createElement("img");
    faceimg.src= facebook
    istaimg.src= insta
    whatsimg.src= whats
    callimg.src= call
    way1.appendChild(faceimg)
    way2.appendChild(istaimg)
    way3.appendChild(whatsimg)
    way4.appendChild(callimg)
    const footer = document.createElement("footer");
    father2.appendChild(footer)
    const footerText = document.createElement("p");
    footer.appendChild(footerText)
    footerText.innerHTML=`© 2025 مطعم باندا. جميع الحقوق محفوظة.`
    }
Contant.addEventListener("click",contant)