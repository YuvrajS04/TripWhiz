import "./Tag.scss"


function Tag({name, handleTags}){
    return(
        <button onClick={() =>handleTags(name)} className="tag">{name}</button>
    )
}

export default Tag;