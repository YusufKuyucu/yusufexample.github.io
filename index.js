const table = document.querySelector("#best-sellers");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
const page4 = document.querySelector("#page4");
const arrowLeft = document.querySelector(".fa-chevron-left");
const arrowRight = document.querySelector(".fa-chevron-right");
const arrows = [arrowLeft, arrowRight];
const pages = [page1, page2, page3, page4];


const page1InnerHtml = `
    <tr class="border my-8">
      <th>Name</th>
      <th>Sales</th>
      <th>Stock</th>
      <th>Category</th>
    </tr>
      <tr>
        <td>Marble Cake</td>
        <td>1647</td>
        <td>62</td>
        <td>Cakes</td>
      </tr>
      <tr>
        <td>Fat Rascal</td>
        <td>1240</td>
        <td>48</td>
        <td>Cupcakes</td>
      </tr>
      <tr>
        <td>Chocolate Cake</td>
        <td>1080</td>
        <td>57</td>
        <td>Cakes</td>
      </tr>
      <tr>
        <td>Goose Breast</td>
        <td>1014</td>
        <td>23</td>
        <td>Cupcakes</td>
      </tr>
      <tr>
        <td>Salzburger Nockerl</td>
        <td>362</td>
        <td>34</td>
        <td>Deserts</td>
      </tr>
  `;
const page2InnerHtml = `
    <tr class="border my-8">
      <th>Name</th>
      <th>Sales</th>
      <th>Stock</th>
      <th>Category</th>
    </tr>
      <tr>
        <td>Kebap</td>
        <td>512</td>
        <td>34</td>
        <td>Meat</td>
      </tr>
      <tr>
        <td>Iskender</td>
        <td>120</td>
        <td>44</td>
        <td>Food</td>
      </tr>
      <tr>
        <td>Künefe</td>
        <td>15000</td>
        <td>27</td>
        <td>Desserts</td>
      </tr>
      <tr>
        <td>Baklava</td>
        <td>2014</td>
        <td>53</td>
        <td>Desserts</td>
      </tr>
      <tr>
        <td>Salzburger Nockerl </td>
        <td>3620</td>
        <td>347</td>
        <td>Cakes</td>
      </tr>
  `;
const page3InnerHtml = `
    <tr class="border my-8">
      <th>Name</th>
      <th>Sales</th>
      <th>Stock</th>
      <th>Category</th>
    </tr>
      <tr>
        <td>Döner</td>
        <td>857</td>
        <td>62</td>
        <td>Meat</td>
      </tr>
      <tr>
        <td>Dürüm</td>
        <td>1240</td>
        <td>48</td>
        <td>Food</td>
      </tr>
      <tr>
        <td>Kumru</td>
        <td>100</td>
        <td>40</td>
        <td>Food</td>
      </tr>
      <tr>
        <td>Goose Breast</td>
        <td>1014</td>
        <td>23</td>
        <td>Cupcakes</td>
      </tr>
      <tr>
        <td>Salzburger Nockerl</td>
        <td>362</td>
        <td>34</td>
        <td>Deserts</td>
      </tr>
  `;
const page4InnerHtml = `
    <tr class="border my-8">
      <th>Name</th>
      <th>Sales</th>
      <th>Stock</th>
      <th>Category</th>
    </tr>
      <tr>
        <td>Pide</td>
        <td>1647</td>
        <td>62</td>
        <td>Cakes</td>
      </tr>
      <tr>
        <td>Sucuklu</td>
        <td>140</td>
        <td>48</td>
        <td>Food</td>
      </tr>
      <tr>
        <td>Peynirli</td>
        <td>500</td>
        <td>515</td>
        <td>Food</td>
      </tr>
      <tr>
        <td>Ispanaklı</td>
        <td>600</td>
        <td>73</td>
        <td>Veggie</td>
      </tr>
      <tr>
        <td>Salzburger Nockerl</td>
        <td>362</td>
        <td>34</td>
        <td>Deserts</td>
      </tr>
  `;

let activePage = 1;
const arrowState = () => {
  if (activePage == 1) {
    arrowLeft.classList.add('disabled')
    arrowRight.classList.remove('disabled')
    page1.classList.add('active')
    }
  else if (activePage == pages.length) {
    arrowRight.classList.add('disabled')
    arrowLeft.classList.remove('disabled')
    }
  else {
    arrows.forEach((e) => {
      e.classList.remove("disabled");
    });
  }
};

arrowState();

const page1Active = () => {
  activePage = 1;
  arrowState();
  pages.forEach((e) => e.classList.remove("active"));
  page1.classList.add("active");
  table.innerHTML = page1InnerHtml;
};
const page2Active = () => {
  activePage = 2;
  arrowState();
  pages.forEach((e) => e.classList.remove("active"));
  page2.classList.add("active");
  table.innerHTML = page2InnerHtml;
};
const page3Active = () => {
  activePage = 3;
  arrowState();
  pages.forEach((e) => e.classList.remove("active"));
  page3.classList.add("active");
  table.innerHTML = page3InnerHtml;
};
const page4Active = () => {
  activePage = 4;
  arrowState();
  pages.forEach((e) => e.classList.remove("active"));
  page4.classList.add("active");
  table.innerHTML = page4InnerHtml;
};
arrowLeft.addEventListener("click", () => {
  if (activePage == 4) {
    activePage = 3;
    page3Active();
  } else if (activePage == 3) {
    activePage = 2;
    page2Active();
  } else {
    activePage = 1;
    page1Active();
  }

});
arrowRight.addEventListener("click", () => {
  if (activePage == 1) {
    activePage = page2;
    page2Active();
  } else if (activePage == 2) {
    activePage = page3;
    page3Active();
  } else {
    activePage = 4;
    page4Active();
  }
});
page1.addEventListener("click", page1Active);
page2.addEventListener("click", page2Active);
page3.addEventListener("click", page3Active);
page4.addEventListener("click", page4Active);
