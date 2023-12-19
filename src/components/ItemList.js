const ItemList = ({items})=>{
    console.log(items);
    return(
        <div>
            {
                items.map((item)=>(
                    <div className="p-2 m-2 border-gray-200 border-b-1 text-left" key={item.card.info.id} >
                        <div className="py-2" >
                            <span>{item.card.info.name}</span>
                            <span>{item.card.info.price}</span>
                        </div>
                            <p className="text-sm" >{item.card.info.description}</p>
                    </div>
                ))
            }
            
        </div>
    )
}

export default ItemList;