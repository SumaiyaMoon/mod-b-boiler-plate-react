import Button from '@mui/material/Button';

type buttonProps = {
btnType: any,
btnValue: any,
btnClassName: any,
}
export default function ButtonComp(props: buttonProps){
    // const[ btnType, btnValue] = props
return(
<>
<Button variant="outlined" type={props.btnType} className={props.btnClassName} >{props.btnValue}</Button>
</>
)
}