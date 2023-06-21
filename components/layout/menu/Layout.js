import MenuBtn from "../../ui/MenuBtn";

function Layout(props) {
  return (
    <>
      <MenuBtn />
      <main >{props.children}</main>
    </>
  );
}

export default Layout;
