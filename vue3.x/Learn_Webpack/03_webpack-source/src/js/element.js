import "../css/style.css";
import "../css/test.less";
import "../css/image.css";

// 导入图片模块
import imgCar from "../img/IMG_20190609_164346.jpg";

const divEle = document.createElement("div");
divEle.className = "title";
divEle.innerHTML = "hello world";

const bgDivImg = document.createElement("div");
bgDivImg.className = "bg-img";

// 使用url直接显示
const imgDiv = document.createElement("img");
imgDiv.src = imgCar;

 
document.body.appendChild(divEle);
document.body.appendChild(bgDivImg);
document.body.appendChild(imgDiv);