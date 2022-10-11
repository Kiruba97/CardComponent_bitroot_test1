import "./styles.css";
import { useEffect, useState } from "react";
import Icon from '@material-ui/core/Icon';

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((res) => res.json())
      .then((res) => setUser(res));
  });
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [titles, setTitles] = useState("");
  
  const getClickData = (Data) => {
    console.log(Data.thumbnail.small);
    setTempImgSrc(Data.thumbnail.small);
    setModal(true);
    setTitles(Data.title);
    
  };

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempImgSrc} />
        <h3 style={{color:'white', position: 'absolute', top:'73%', left:'37%'}}>{titles}</h3>
        
      </div>
      <div className="row">
        {user.map((u) => (
          <div
            className="card-container column"
            key={u.id}
            onClick={() => getClickData(u)}
          >
            <div className="image-container">
              <img src={u.thumbnail.small} />
            </div>
            <button>Learn More</button>
            <div className="card-content">
              <div className="card-title">
                <h3>{u.title}</h3>
              </div>
              <div className="card-body">
                <p>{u.content}</p>
              </div>
              <div className="card-footer">
                <img style ={{ width: "40px",borderRadius:"50%",backgroundSize:"cover" ,height: "40px"}} src={u.author.avatar} />
                <p>{u.author.role}</p>
                <div className="time">
                  <p>{u.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}



