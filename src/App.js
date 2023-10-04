// import { useState, useEffect } from "react";
// import Player from "./Player";

import "./App.css";
import Player from "./Player";

function App() {
  // const [audio, setAudio] = useState([]);
  // const [count, setCount] = useState(0);

  // const handle = () => {
  //   setCount(count + 1);
  //   if (count >= 3) {
  //     setCount(0);
  //   }
  // };

  // const handle2 = () => {
  //   setCount(count - 1);
  //   if (count <= 0) {
  //     setCount(3);
  //   }
  // };

  // useEffect(() => {
  //   fetch("music.json", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAudio(data[count].track);
  //       // console.log(data[count]);
  //       // console.log(data.length);
  //     })
  //     .catch((error) => console.log(error));
  // }, [count]);

  return (
    <div className="App">
      <nav>
        <ul>my_Tape</ul>
      </nav>
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

      <section className="section">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet.
        </p>
      </section>
      {/* <Player />
      <div className="music">{audio}</div>
      <audio src={audio} controls autoPlay />
      <div className="btns">
        <button onClick={handle2}>Count MINUS</button>
        <button onClick={handle}>Count PLUS</button>
      </div> */}
    </div>
  );
}

export default App;
