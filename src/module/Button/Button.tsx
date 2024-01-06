import styless from './Button.module.scss';

const Button = ( props: { btName: number , btFun : (btValue : number) => void } ) => {
    const btClass = props.btName % 2 ? 'btEven' : 'btOdd' ;
    // console.log('styless',styless)

    const callFun = () => {
      
        console.log('btName', props.btName)
    }
    return(
        <button className={styless[btClass]} onClick={() => props.btFun(props.btName)}> {props.btName} </button>
    )
};

export default Button;


//onchange -----> setNewValue