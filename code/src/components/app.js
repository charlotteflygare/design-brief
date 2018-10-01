import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">

      <div className="navbar">
          <ul>
            <li><a href="">Home</a></li>
            <li>Technology</li>
            <li>Creativity</li>
            <li>Entreprenuership</li>
            <li>Self</li>
            <li>Culture</li>
            <li>Digital design</li>
            <li>Popular on Medium</li>
            <li>Politics</li>
            <li>More</li>
            <li><button className="navbarButton">Get started</button></li>
          </ul>
        </div>


        <div className="hero">
          <div className="heroSection">
            <div className="heroText">
              <h1>Interesting ideas that set your mind in motion</h1>
              <p>Here directly from the people who know it best. From tech to politics to creativity and more — whatever your interest, we have got you covered.</p>
              <div className="heroButtons">
                <button className="buttonBlack">Get started</button>
                <button className="buttonWhite">Learn more</button>
              </div>
              </div>
              <div className="heroImage"><img src="./images/medium-image.png"></img></div>
              </div>
          </div>

        <div className="containerBigPuff">
          <div className="containerPuff">
              <div className="imagePuff">
                <img src="./images/medium-image-puff-1.jpeg"></img>
              </div>
              <div ClassName="containerPuffText">
                <div className="puffText">
                  <h2>The boy who tamed the sea</h2>
                  <p>At 5:30 am, in any morning I can handle it, I’ll slip out the dark mouth of my covers and creep through the silver lig…</p>
                </div>

                <div className="containerPuffAuthor">
                  <div className="authorImage">
                  <img src="./images/writer-1.png"></img>
                </div>

                <div className="authorName">
                  <h3>Carl Moore</h3>
                  <p>Oct 27 <span>8 min read</span></p>
                </div>

                <div className="authorIcon">
                  <img src="./images/bookmark.png"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="containerPuff">
              <div className="imagePuff">
                <img src="./images/medium-image-puff-2.png"></img>
              </div>
              <div ClassName="containerPuffText">
                <div className="puffText">
                  <h2>The role of Human Emotions in the Future of Transport</h2>
                  <p>Getting from A to B is about to feel very different</p>
                </div>

                <div className="containerPuffAuthor">
                  <div className="authorImage">
                  <img src="./images/writer-2.jpeg"></img>
                </div>

                <div className="authorName">
                  <h3>Ben Bland</h3>
                  <p>Nov 1<span>7 min read</span></p>
                </div>

                <div className="authorIcon">
                  <img src="./images/bookmark.png"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="containerPuff">
              <div className="imagePuff">
                <img src="./images/medium-image-puff-4.jpeg"></img>
              </div>
              <div ClassName="containerPuffText">
                <div className="puffText">
                  <h2>The March of the Losers</h2>
                  <p>Around the world, the victims are becoming the abusers, and Donald Trump is their king</p>
                </div>

                <div className="containerPuffAuthor">
                  <div className="authorImage">
                  <img src="./images/writer-3.jpeg"></img>
                </div>

                <div className="authorName">
                  <h3>Henry Wismayer</h3>
                  <p>Nov 10<span>8 min read</span></p>
                </div>

                <div className="authorIcon">
                  <img src="./images/bookmark.png"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="containerPuff">
              <div className="imagePuff">
                <img src="./images/medium-image-puff-3.png"></img>
              </div>
              <div ClassName="containerPuffText">
                <div className="puffText">
                  <h2>The Burning Season</h2>
                  <p>You cannot save everything when the fires come to Northern California</p>
                </div>

                <div className="containerPuffAuthor">
                  <div className="authorImage">
                  <img src="./images/writer-4.jpeg"></img>
                </div>

                <div className="authorName">
                  <h3>Lindsey Smith</h3>
                  <p>Nov 9<span>31 min read</span></p>
                </div>

                <div className="authorIcon">
                  <img src="./images/bookmark.png"></img>
                </div>
              </div>
            </div>
          </div>


      </div>
    </div>

    )
  }

}

export default App
