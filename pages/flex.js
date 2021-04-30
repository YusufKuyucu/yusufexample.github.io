const flexHtml = `
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&display=swap");
      @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
      :root {
        --color1: #03b4e0;
        --color2: blue;
        --color3: darkblue;
        --color4: coral;
        --color5: rgb(209, 246, 255);
        --color6: rgb(171, 233, 248);
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {

        background-color: var(--color6);
      }
      .content{
        width:70vw;
        height: 100vh;
                overflow-x:hidden;

      }
      .container{
        width:95vw;
        height:100vh;
      }
      .flex-nav {
        width: 100%;
        height: 5vh;
        position: sticky;
        top: 20px;
        left:0;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0.5rem;
        gap: .2rem;
        text-align: center;
        border-bottom: 1px solid var(--color4);
      }
      .flex-nav > * {
        width: 2rem;
        height: 4vh;
        flex: 1 1 15%;
        border-radius: 0.2rem;
        text-decoration: none;
        color: white;
        background-color: var(--color4);
        transition: 0.15s ease-in-out;
      }
      .flex-nav > *:hover,
      .flex-nav > :focus {
        background-color: white;
        color: var(--color4);
      }
      .flex-content {
        width: 80vw;
        height: 95vh;
        overflow-y: scroll;
        scroll-behavior: smooth;
      }
      .box1 {
        background-color: var(--color1);
      }
      .box2 {
        background-color: var(--color2);
      }
      .box3 {
        background-color: var(--color3);
      }
      .box4 {
        background-color: var(--color1);
      }
      .box5 {
        background-color: var(--color2);
      }
      .box6 {
        background-color: var(--color3);
      }
      .box7 {
        background-color: var(--color1);
      }
      [id^="flex"] {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        flex-wrap: wrap;
        background-color: var(--color5);
      }
      [id^="flex"]:nth-child(even) {
        border: 1px solid coral;
        border-left: none;
        border-right: none;
        background-color: var(--color6);
      }
      [id^="flex"] > * {
        width: 50vw;
        height: 100vh;
      }
      [class^="box"] {
        width: 20%;
        height: 20%;
      }

      #flex2 {
        justify-items: flex-start;
        align-items: flex-start;
      }
      #flex4 {
        flex-direction: row;
      }
      #flex4 > :first-child {
        width: 10%;
      }
      #flex4 > :nth-child(2) {
        width: 30%;
      }
      #flex4 > :last-child {
        width: 60%;
        background-color: var(--color3)
      }
      #flex5 {
        padding: 10%;
        background-color: white;
      }
      #flex5 > div {
        width: 25%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--color5);
        padding: 5%;
      }
      #flex6 {
        padding: 5%;
        gap: 10%;
      }
      #flex6 > :nth-child(2) {
        margin-left: 15%;
      }
      #flex6 > :nth-child(3) {
        margin-left: 30%;
      }
      @media (max-width: 500px) {
        .flex-nav {
          font-size: 0.7rem;
          gap: 0.1rem;
        }
        .flex-nav > * {
          flex: 1 1 10%;
          height: 1.5rem;
          border-radius: 0rem;
          padding: 0.1rem 0;
        }
      }
    </style>

    <div class="flex-container">
      <div class="flex-nav">
        <a href="flex1">1</a>
        <a href="#flex2">2</a>
        <a href="#flex3">3</a>
        <a href="#flex4">4</a>
        <a href="#flex5">5</a>
        <a href="#flex6">6</a>
      </div>
      <div class="flex-content">
        <div id="flex1">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
        </div>
        <div id="flex2">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
          <div class="box5"></div>
          <div class="box6"></div>
          <div class="box7"></div>
        </div>
        <div id="flex3">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
          <div class="box5"></div>
          <div class="box6"></div>
          <div class="box7"></div>
        </div>
        <div id="flex4">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
        </div>
        <div id="flex5">
          <div>
            <div class="box1"></div>
            <div class="box2"></div>
            <div class="box3"></div>
          </div>
        </div>
        <div id="flex6">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
        </div>
      </div>
    </div>

`;
export default flexHtml;
