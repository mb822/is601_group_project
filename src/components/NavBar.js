import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

const NavBar = () => {
  return (
    <Navbar
      style={{
        background: "transparent",
        backdropFilter: "none"
      }}
    className="absolute"
    >
      <NavbarContent>
        <NavbarBrand>
          <h1 className="text-4xl">FitFarm</h1>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#products" className="text-xl">
            Our Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about" className="text-xl">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#social" className="text-xl">
            Outlaw Social
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;
