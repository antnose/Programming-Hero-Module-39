import "./InnerComp.css";
function SingleAlbum({ data }) {
  const { id, title } = data;
  return (
    <div className="innerUtility">
      <h3>Title : {title} </h3>
      <p>User id : {id} </p>
    </div>
  );
}

export default SingleAlbum;
