const Buttons = (props) => {
    return (
        <>
            <button onClick={props.zeroHandler}>0</button>
            <button onClick={props.oneHandler}>1</button>
            <button onClick={props.twoHandler}>2</button>
            <button onClick={props.threeHandler}>3</button>
            <button onClick={props.fourHandler}>4</button>
            <button onClick={props.fiveHandler}>5</button>
            <button onClick={props.sixHandler}>6</button>
            <button onClick={props.sevenHandler}>7</button>
            <button onClick={props.eightHandler}>8</button>
            <button onClick={props.nineHandler}>9</button>
        </>
    ) 
}

export default Buttons;