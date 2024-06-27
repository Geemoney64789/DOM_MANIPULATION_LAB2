import "./styles.css";
// Menu data structure Step 4
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//Part 1
const mainEl = document.querySelector(`main`);

mainEl.style.backgroundColor = getComputedStyle(
  document.documentElement
).getPropertyValue(`--main-bg`);

mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;

mainEl.classList.add(`flex-around`);

//Part 2
const topMenuEl = document.querySelector(`#top-menu`);

topMenuEl.style.height = `100%`;

topMenuEl.style.backgroundColor = getComputedStyle(
  document.documentElement
).getPropertyValue(`--top-menu-bg`);

topMenuEl.classList.add(`flex-around`);

//Part 3
menuLinks.forEach(function (link) {
  var menuItem = document.createElement(`a`);
  menuItem.href = link.href;
  menuItem.textContent = link.text;
  topMenuEl.appendChild(menuItem);
});

const subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";

const subMenuBg = getComputedStyle(document.documentElement).getPropertyValue(
  "--sub-menu-bg"
);
subMenuEl.style.backgroundColor = subMenuBg;

subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";

subMenuEl.style.top = "0";

const topmenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }

  console.log(event.target.textContent);
});

//Site kept giving me an error if I changed any of the above code to change the menus active status so I just rewrote the entire above code changing the active status to the links below.

const topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.tagName !== "A") {
    return;
  }

  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });

  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
  } else {
    event.target.classList.add("active");
  }

  console.log(event.target.textContent);
});
