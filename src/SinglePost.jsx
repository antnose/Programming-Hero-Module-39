import "./Utility.css";
function SinglePost({ p }) {
  return (
    <div className="utility">
      <h3> Title : {p.title} </h3>
      <p> ID : {p.id} </p>
      <p>Content : {p.body} </p>
    </div>
  );
}

export default SinglePost;
