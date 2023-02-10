const input = document.getElementById("numberofwords");
const container = document.querySelector(".container");

const generateWords = (n) => {
  let text = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < n; i++) {
    const random = (Math.random() * (letters.length - 1)).toFixed(0);
    text += letters[random];
  }
  return text;
};
let numberofwords;
const generateparas = () => {
  numberofwords = Number(input.value);

  const para = document.createElement("p");
  let data = "";
  for (let i = 0; i < numberofwords; ++i) {
    const randomnumber = (Math.random() * 15).toFixed(0);
    data += generateWords(randomnumber);
    data += " ";
  }
  para.innerText = data;

  para.setAttribute("class", "mypara");
  container.append(para);
};
