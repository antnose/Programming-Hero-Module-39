import { useEffect, useState } from "react";
import "./Utility.css";
import SingleAlbum from "./SingleAlbum";

function Album() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbum(data));
  }, []);

  return (
    <div className="utility">
      {album.map((data) => (
        <SingleAlbum data={data} />
      ))}
    </div>
  );
}

export default Album;

/**
 * 1. create a state to store the data
 * 2. create use effect with no dependency
 * 3. use fetch to load data
 */
