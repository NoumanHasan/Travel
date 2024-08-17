let searchBtn = document.getElementById("searchBtn");
let clearBtn = document.getElementById("clearBtn");
let searchInput = document.getElementById("searchInput");
let container = document.getElementById("destination");

// countries
let countries = `<div id="recom">
          <img src="./images/australia.jpg" alt="" />
          <h3 style="margin: 5px 10px">Sydney, Australia</h3>
          <p style="margin: 5px 10px">
            A vibrant city known for its iconic landmarks like the Sydney Opera
            House and Sydney Harbour Bridge
          </p>
          <button style="margin: 0px 10px">View</button>
        </div>
        <div id="recom">
          <img src="./images/japan.jpg" alt="" />
          <h3 style="margin: 5px 10px">Tokyo, Japan</h3>
          <p style="margin: 5px 10px">
            A bustling metropolis blending tradition and modernity, famous for
            its cherry blossoms and rich culture.
          </p>
          <button style="margin: 0px 10px">View</button>
        </div>`;

// beaches
let beaches = `<div id="recom">
          <img src="./images/borabora.jpg" alt="" />
          <h3 style="margin: 5px 10px">Bora Bora, French Polynesia</h3>
          <p style="margin: 5px 10px">
            An island known for its stunning turquoise waters and luxurious
            overwater bungalows.
          </p>
          <button style="margin: 0px 10px">View</button>
        </div>
        <div id="recom">
          <img src="./images/copo.jpg" alt="" />
          <h3 style="margin: 5px 10px">Copacabana Beach, Brazil</h3>
          <p style="margin: 5px 10px">
            A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere
            and scenic views.
          </p>
          <button style="margin: 0px 10px">View</button>
        </div>`;

// temples
let temples = `<div id="recom">
          <img src="./images/angkor.jpg" alt="" />
          <h3 style="margin: 5px 10px">Angkor Wat, Cambodia</h3>
          <p style="margin: 5px 10px">
            A UNESCO World Heritage site and the largest religious monument in
            the world
          </p>
          <button style="margin: 0px 10px">View</button>
        </div>
        <div id="recom">
          <img src="./images/tajmahal.jpg" alt="" />
          <h3 style="margin: 5px 10px">Taj Mahal, India</h3>
          <p style="margin: 5px 10px">
            An iconic symbol of love and a masterpiece of Mughal architecture.
          </p>
          <button style="margin: 0px 10px">View</button>
        </div>`;

function search() {
  let val = searchInput.value;
  switch (val) {
    case "country":
      container.innerHTML = countries;
      container.classList.remove("hide");
      break;
    case "beach":
      container.innerHTML = beaches;
      container.classList.remove("hide");

      break;
    case "temple":
      container.innerHTML = temples;
      container.classList.remove("hide");

      break;
    default:
      alert("Please enter country, beach or temple.");
      break;
  }
}

function clearValue() {
  searchInput.value = "";
  container.classList.add("hide");
}
clearBtn.addEventListener("click", clearValue);
searchBtn.addEventListener("click", search);
