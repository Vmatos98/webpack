import _ from "lodash"

function component(){
    const element = document.createElement("div");

    //_ representa o lodash
    element.innerHTML = _.join(["Hello World", "webpack"]," ");
    element.classList.add("hello");

    return element;
}

document.body.appendChild(component());