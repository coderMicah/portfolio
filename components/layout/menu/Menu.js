import ReactDOM from "react-dom";
import Link from "next/link";
import classes from "./Menu.module.css";

function Menu({ isOpen, setIsOpen }) {
  const menuItems = [
    {
      key: "home",
      url: "/",
      name: "Home",
    },
    {
      key: "aboutMe",
      url: "/about-me",
      name: "About Me",
    },
    {
      key: "projects",
      url: "/myprojects",
      name: "Projects",
    },
    // {
    //     key: "blog",
    //     url: "/blog",
    //     name: "Blog",
    // },
    {
      key: "contactMe",
      url: "/contact",
      name: "Contact Me",
    },
  ];
  if (typeof window === "object") {
    return ReactDOM.createPortal(
      isOpen && (
        <nav className={classes.navbar}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.key}>
                <Link href={item.url}>
                  <a onClick={() => setIsOpen(!isOpen)}>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ),
      document.getElementById("menu-overlay")
    );
  }

  return;
}

export default Menu;
