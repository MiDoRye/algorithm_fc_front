console.log("자바스크립트 파일을 html로 로드하였음")

//const, let, var

function handleSingleClick(e) {
    const singleItem = document.getElementById(e, id)
    singleItem.classList.toggle("mystyle")
}

function addItem() {
    console.log("addItem 실행")
    const iteminput = document.getElementById("item-input")
    const content = iteminput.value
    const newList = document.createElement("li")
    newList.innerText = content

    const myList = document.getElementById("my-list")
    myList.append(newList)
}