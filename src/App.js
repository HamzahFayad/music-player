import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Player from "./Player";
import music from "./music.json";
// import Showcase from "./components/Showcase";

function App() {
  // const [audio, setAudio] = useState([]);
  const [count, setCount] = useState(0);

  const handle = () => {
    setCount(count + 1);
    if (count >= 3) {
      setCount(0);
    }
  };

  const handle2 = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(3);
    }
  };

  // useEffect(() => {
  //   fetch("music.json", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAudio(data[count].track);
  //       console.log("audio", audio);
  //       //audioRef.current.play();

  //       // console.log(data[count]);
  //       // console.log(data.length);
  //     })
  //     .catch((error) => console.log(error));
  // }, [count]);

  const skew = (e) => {
    let xPos = ((e.clientX * 8) / window.innerWidth) * 1.25;
    let yPos = ((e.clientY * 5) / window.innerHeight) * 0.5;
    document.querySelector(
      ".Player svg"
    ).style.transform = `rotateX(${xPos}deg) rotateY(${yPos}deg)`;
  };

  return (
    <div className="App">
      <div
        className="Grid-width Header"
        onMouseMove={skew}
        //style={{ background: "lightblue" }}
      >
        <Navbar />
        <section className="Header-section">
          <div>
            <h1>
              Sound on
              <span className="h1-opac1">Sound on</span>
              <span className="h1-opac2">Sound on</span>
            </h1>
            <h2>Immerse into old music in a familiar but new way</h2>
            {/* <hr></hr> */}
            <span>90's songs to blast again & again</span>
          </div>
          <Player />
        </section>

        {music.slice(count, count + 1).map((m) => {
          return (
            <div>
              {m.audio}
              <audio src={require(`./music/${m.track}`)} controls autoPlay />
            </div>
          );
        })}
        <section className="section">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </section>
        {/* <div className="music">{audio}</div>
        <audio className="audio" src={audio} controls autoPlay /> */}
        <div className="btns">
          <button onClick={handle2}>Count MINUS</button>
          <button onClick={handle}>Count PLUS</button>
        </div>
      </div>
      {/* <Showcase />*/}
    </div>
  );
}

export default App;
