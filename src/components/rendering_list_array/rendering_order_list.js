import './list.css';
const items  = [
    {'title':'cabbage',isFruit:false,id:1 },
    {'title':'pumkin',isFruit:false,id:2 },
    {'title':'apple',isFruit:true,id:3 },
    {'title':'mango',isFruit:true,id:4 },
    {'title':'methi',isFruit:false,id:5 },
    {'title':'cauliflower',isFruit:false,id:6 },
]


export default function Product(){
let listItems  = items.map((data)=>{
    return <li key={data.id} style={{color:data.isFruit?'red':'green'}} >
        {data.title}
    </li>;
})

console.log(listItems);
    
    return (
        <>
        <ul className="listItems">
            {listItems}
        </ul>
         </>
    )


}