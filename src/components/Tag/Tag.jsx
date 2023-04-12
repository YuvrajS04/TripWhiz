import "./Tag.scss";

function Tag({ name, handleTags, selected, onClick }) {
  const tagClassName = selected ? "tag selected" : "tag";
//   const handleClick = () => {
//     handleTags(name)}
//     if (onClick) {
//       onClick(); // Call the onClick prop if it's provided
//     }
//   };

//   return (
//     <button onClick={handleClick} className={tagClassName}>
//       {name}
//     </button>
//   );

  return (
    <button onClick={() => handleTags(name)} className={tagClassName}>
      {name}
    </button>
  );
}

export default Tag;
