import './index.css'
const Default = (props)=>{
    let {mode} = props
    return(
        <img src={mode} className="dafault_bulb"  ></img>
    )
}
export default Default  