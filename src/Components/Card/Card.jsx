import CardBaby from "./CardBaby/CardBaby";

function Card(props){
    const abu = (data, el)=> {
     props.liftingUp(data,el)
    }
    return(
        <div className="Card">
    
            <CardBaby abu={abu}/>
        </div>
    )
}
export default Card