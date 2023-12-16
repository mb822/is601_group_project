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
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <h1 class="text-4xl">FitFarm</h1>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#products" class="text-xl">
            Our Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about" class="text-xl">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#social" class="text-xl">
            Outlaw Social
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;
