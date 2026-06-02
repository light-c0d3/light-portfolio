import myPic from '../assets/rnk.jpeg'


function Home() {
  return (
    <section id="home" className="hero">
      <div className="main-content">
        <div className="main-text">
          <h1> $whoami  </h1>
          <h1> Ruveyda Nur Kizmaz </h1>
          <h3> ~Aspiring Pentester</h3>
          <br/>
          <p> I've graduated from BSc Computer Science from WLU..</p>
          <p> My main interest areas are Cyber Security and AI.</p>
          
          <div className="some-buttons">
            <button> 0.0 </button>
            <button> 1_1 </button>
          </div>
        </div>

        <div className="me-image">
          <img src={myPic} alt="Me"
          draggable={false} />

        </div>
      </div>
    </section>
  )
}

export default Home
