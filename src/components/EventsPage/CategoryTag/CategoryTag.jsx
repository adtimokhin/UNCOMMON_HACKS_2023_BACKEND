import "./CategoryTag.css"

function CategoryTag(props){
    const tag = props.tagName;

    return(<p className="category-tag" onClick={() => {
    }}>#{tag}</p>)
}

export default CategoryTag