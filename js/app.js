const main = document.getElementById("main");
let dataIndex = 0;
let increment = 0;

var a = fetch("assets/quiz.json")
  .then((res) => res.json())
  .then((data) => clicked(data));
const clicked = (data) => {
  main.innerHTML = `<div class="quizContainer">
    <div class="questionContainer">
    <a class="question"> Q${dataIndex + 1} ${data[dataIndex].question}</a>
    </div>
    <div class="answerContainer">
    <p id="answer1" class="answer"><input name="answer" type="radio" id="answer1"> ${
      data[dataIndex].options[0]
    } </p>
    <p class="answer"><input name="answer" type="radio" id="answer2">${
      data[dataIndex].options[1]
    }</p>
    <p class="answer"><input name="answer" type="radio" id="answer3">${
      data[dataIndex].options[2]
    } </p>
    <p class="answer"><input name="answer" type="radio" id="answer4">${
      data[dataIndex].options[3]
    } </p>
    </div>
    <button class="button">submit</button>
    </div>`;
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    let p = document.querySelectorAll("input");
    let answer = data[dataIndex].answer;
    p.forEach((v, k) => {
      v.checked ? (v.id == answer ? increment++ : increment) : "dataIndex++";
    });
    dataIndex++;
    data[dataIndex]
      ? clicked(data)
      : (main.innerHTML = `<p class="question" >You Got ${dataIndex} / ${
          increment == dataIndex ? increment + "👏" : increment
        } </p>`);

    // console.log(increment);
  });
};
