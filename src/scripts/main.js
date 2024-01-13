const SHOWS = [...document.querySelectorAll(".shows__list")];
const NAVS = [...document.querySelectorAll("[data-show]")];

const hidden_shows = () => {
  SHOWS.forEach((show) => show.classList.remove("shows__list--is-active"));
  NAVS.forEach(nav => nav.classList.remove("shows__nav__list__item--is-active"));
};

const unhide_show = ({ target }) => {
  hidden_shows();
  const SHOW = document.querySelector(`#${target.dataset.show}`);
  const NAV = document.querySelector(`[data-show=${target.dataset.show}]`);
  SHOW.classList.add("shows__list--is-active");
  NAV.classList.add("shows__nav__list__item--is-active");
};

const add_listener_shows = () => {
  NAVS.forEach((NAV) => NAV.addEventListener("click", unhide_show));
};

const run_shows = () => {
  add_listener_shows();
};

function init() {
  run_shows();
}

init();
