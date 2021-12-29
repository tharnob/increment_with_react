const domContainer = document.querySelector("#root");

const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    return (
        <div className="elements">
            <h1 id="display">{ counter }</h1>
            <div>
                <button id="button" onClick={() => setCounter(counter+1)}>Increment +</button>
            </div>
        </div>
    );
}



ReactDOM.render(
    
    <div className = "container">
        <Increment/>
        <Increment/>
        <Increment/>
        <Increment/>

    </div>,
    domContainer);


// let number = 0;
// const display = document.querySelector("#display");
// const button = document.querySelector("#button");


// button.addEventListener("click" , () => {
//     number++;
//     display.textContent = number;
// });

