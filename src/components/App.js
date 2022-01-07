import React from "react";

const App = () => {

    const myText = 'Kenan is learning React \n because Kenan loves React';
    const mySplitText= myText.split('\n').map((text) => <p>{text}</p>);

    return (
        <div className="App">
            {mySplitText}
        </div>
    )
}
export default App