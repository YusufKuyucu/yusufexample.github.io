const portfolioHtml = `
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
:root {
  --primary: #03b4e0;
  --primary2: #016e8a;
  --secondary: coral;
  --light1: #aaa;
  --light2: #ccc;
  --light3: #dedede;
  --light4: #fefefe;
  --dark1: #999;
  --dark2: #777;
  --dark2: #555;
  --dark3: #333;
  --dark4: #111;
  --shadow1: 0.3rem 0.3rem 1rem var(--dark1);
  --gradient1: linear-gradient(
    120deg,
    rgba(1, 110, 138, 1) 0%,
    rgba(3, 180, 224, 1) 100%
  );
  --gradient2: linear-gradient(
    120deg,
    rgba(1, 110, 138, 0.2) 0%,
    rgba(3, 180, 224, 0.2) 100%
  );
}
.content {
  display: flex;
  height: 95vh;
  font-family: "Poppins";
}
h1,
h2,
h4 {
  font-weight: 500;
  margin: 0.3rem;
}
.portfolio-nav {
  margin: 0.5rem;
  width: 3rem;
  height: 90%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.portfolio-nav div {
  padding: 1rem 0.2rem;
  display: inline-flex;
  flex-direction: column;
  border-radius: 3rem;
  background-color: var(--light4);
  box-shadow: 0.3rem 0.3rem 1rem var(--dark1);
}
.portfolio-nav a {
  margin: 0.2rem;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1rem;
  border-radius: 2rem;
  background-color: var(--secondary);
}
.wrapper {
  width: 90%;
  height: 95%;
  position: relative;
  display: flex;
  letter-spacing: 2%;
  border: 1px solid var(--secondary);
  border-radius: 0 1rem 1rem 0;
  overflow: hidden;
  background-color: var(--primary);
  box-shadow: 0.3rem 0.3rem 1rem var(--dark1);
}
.persona {
  width: 30%;
  height: 80%;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: var(--light4);
}
.persona:first-child {
  margin-top: 15%;
}
.porfolio-content {
  width: 70%;
  height: 100%;
  position: absolute;
  right: 0;
  z-index: 1;
  overflow-y: hidden;
  scroll-behavior: smooth;
  border-radius: 1rem;
  background-color: var(--light4);
  box-shadow: -0.2rem 0.2rem 1rem gray;
}
img {
  width: 60%;
  border-radius: 50%;
  border: 1px solid white;
  box-shadow: -0.2rem 0.2rem 1rem gray;
}
button {
  width: 75%;
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--secondary);
  background-color: var(--light4);
  border: 0.15rem solid var(--secondary);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  transition: 0.1s ease-out;
}
button:hover,
a:hover {
  transform: scale(1.05);
  color: var(--light4);
  background-color: var(--secondary);
  box-shadow: var(--shadow1);
}
a:active,
a:focus {
  color: var(--secondary);
  border: 1px solid var(--secondary);
  background-color: var(--light4);
}
i {
  color: var(--light4);
  text-align: center;
}

.persona i {
  font-size: 1.7rem;

  text-align: center;
  margin: 1rem 0.3rem;
}
article {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--secondary);
  background-color: var(--light4);
}
#home {
  flex-direction: column;
}
#home h1 {
  font-size: 3rem;
  font-weight: 300;
  line-height: 2.5rem;
}
@media (max-width: 850px) {
  #content{
    display:flex;
    flex-direction: column;
  }
  .portfolio-nav {
    order: -1;
    flex-direction: row;
    height: unset;
    width: 90%;
    margin: 0.2rem;
    padding: 0.2rem;
  }
  .portfolio-nav div {
    padding: 0.1rem 0.2rem;
    display: inline-flex;
    flex-direction: row;
    border-radius: 2rem;
    background-color: var(--light4);
    box-shadow: 0.3rem 0.3rem 1rem var(--dark1);
  }
  button {
    font-size: 0.6rem;
    padding:.1rem;
    margin: 1rem
  }
  #home h1 {
    font-size: 2rem;
    text-align: center;
  }
  h2 {
    font-size: 1rem;
  }
  h4,
  p,
  .persona i {
    font-size: 0.6rem;
  }
  .persona i{
    font-size: 1rem;
    margin: .2rem
  }
}
@media (max-width: 450px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  .portfolio-nav {
    order: -1;
    flex-direction: row;
    height: unset;
    width: 90%;
    margin: 0.2rem;
    padding: 0.2rem;
  }

  .portfolio-nav div {
    padding: 0.1rem 0.2rem;
    display: inline-flex;
    flex-direction: row;
    border-radius: 2rem;
    background-color: var(--light4);
    box-shadow: 0.3rem 0.3rem 1rem var(--dark1);
  }
  .portfolio-nav a {
    margin: 0.2rem;
    padding: 0.5rem;
    font-size: 0.8rem;
    line-height: 0.8rem;
    border-radius: 2rem;
  }
  .wrapper {
    width: 97%;
    height: 97%;
  
    display: flex;
    flex-direction: column;
    letter-spacing: 2%;
    border: 1px solid var(--secondary);
    border-radius: 1rem;
    overflow: hidden;
    background-color: var(--primary);
    box-shadow: 0.3rem 0.3rem 1rem var(--dark1);
  }
  .persona {
    order: 1;
    width: 100%;
    height: 20%;
    padding: 25rem auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: var(--light4);

  }
  .persona div:last-child {
    margin-right: 1rem;
  }
  .persona h2 {
    font-size: 0.5rem;
    line-height:.2rem;
    margin: 0;
  }
  .persona h4,
  .persona p {
    font-size: 0.5rem;
    line-height: 0.5rem;
    margin: 0.1rem;
    padding: 0.1rem;
    font-size: 0.5rem;
  }
  .porfolio-content {
    order: 2;
    width: 100%;
    height: 85%;
    position: absolute;
    bottom: 0;
    scroll-behavior: smooth;
    border-radius: 1rem;
    background-color: var(--light4);
    box-shadow: -0.2rem 0.2rem 1rem gray;
  }
  .persona i {
    font-size: 0.7rem;
    margin: 0.1rem;
    padding: 0.1rem;
  }
  img {
    width:7vh;
    height: 7vh;
    border-radius: 50%;
    border: 1px solid white;
    box-shadow: -0.2rem 0.2rem 1rem gray;
    margin-bottom: 0;
  }
  button {
    width: 100%;
    margin: 0.2rem;
    font-size: 0.7rem;
    font-weight: 400;
  }
}

  </style>
      <div class="wrapper">
      <div class="persona">
        <div>
          <img src="./src/Bedriye-lg.jpg" alt="" />
          <h2>Ece UYSAL</h2>
          <h4>Web Designer</h4>
        </div>
        <div>
          <div>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
          <button>Download CV</button>
          <p>&copy; 2021 All right reserved.</p>
        </div>
      </div>
      <div class="porfolio-content">
        <article id="home">
          <h1>Ece UYSAL</h1>
          <h3>Web Designer</h3>
        </article>
        <article id="user">
          <h3>Userr</h3>
        </article>
        <article id="school">
          <h3>School</h3>
        </article>
        <article id="jobs">Jobs</article>
      </div>
    </div>
    <nav class="portfolio-nav">
      <div>
        <a href="#home"><i class="fas fa-home"></i></a>
        <a href="#user"><i class="fas fa-user"></i></a>
        <a href="#school"><i class="fas fa-graduation-cap"></i></a>
        <a href="#jobs"><i class="fas fa-briefcase"></i></a>
      </div>
      <div>
        <a href="#"><i class="fas fa-chevron-right"></i></a>
        <a href="#"><i class="fas fa-chevron-left"></i></a>
      </div>
    </nav>
`;

export default portfolioHtml;
