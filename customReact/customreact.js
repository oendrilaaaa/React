function customRender(custElement, container){
    // const domElement = document.createElement(customElement.type)
    // domElement.innerHTML= customElement.children
    // domElement.setAttribute('href', customElement.props.href)
    // domElement.setAttribute('target', customElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(customElement.type)
    domElement.innerHTML = customElement.children
    for (const prop in customElement.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop, customElement.props[prop])
        
    }
    container.appendChild(domElement)
}

const customElement = {
    type : "a",
    props : {
        href : 'https://youtube.com',
        target : '_blank'
    },
    children : "Click here to visit youtube"
}

const mainContainer = document.querySelector("#root")

customRender(customElement, mainContainer)




