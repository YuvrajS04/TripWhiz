import "./Tag.scss";

function Tag({ name, handleTags, selected, onClick }) {
  const tagClassName = selected ? "tag selected" : "tag";
  return (
    <button onClick={() => handleTags(name)} className={tagClassName}>
      {name}
    </button>
  );
}

export default Tag;
