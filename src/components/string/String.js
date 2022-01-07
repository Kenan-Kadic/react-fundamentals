import React from "react";

const String = () => {

const myText = 'Kenan is learning React \n because Kenan loves React';
const mySplitText= myText.split('\n').map((text) => <p>{text}</p>);

const aText = 'Kenan is still learning React \n because Kenan still loves it';
const aSplitText = aText.split('\n').map((text) => <p>{text}</p>);

const anotherText = 'Kenan is weeks later still working on react \n because he still love it a lot';
const anotherSplitText = anotherText.split('\n').map((text) => <p>{text}</p>);

const finalText = 'Kenan is still learning React to get better \n because he loves it';
const finalSplitText = finalText.split('\n').map((text) => <p>{text}</p>);

return (
    <div>
            {mySplitText}
            {aSplitText}
            {anotherSplitText}
            {finalSplitText}
    </div>
)
}

export default String