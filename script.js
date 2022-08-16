let inputNum = document.getElementById('numberVal')

const submitBtn = document.getElementById('submit')


// event for number value submit button
submitBtn.addEventListener("click", (event) => {
    console.log(inputNum.value)
  })