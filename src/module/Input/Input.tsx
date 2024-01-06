const Input = (props:{inputValue : number , btFun : (btValue : number) => void}) =>
 {

    return (<input value={props.inputValue} onChange={(e) => 
        {
            
            console.log('e',e.target.value);

            props.btFun(parseInt(e.target.value))
    
    
    }

        
    }/>);
}



export default Input;