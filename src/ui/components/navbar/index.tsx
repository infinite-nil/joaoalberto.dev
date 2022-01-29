import Link from "next/link";
import { Container, NavLink, Wrapper } from "./styles";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Link href="/" passHref>
          <NavLink>/</NavLink>
        </Link>
        <div>
          <Link href="/blog" passHref>
            <NavLink>/blog</NavLink>
          </Link>
          <Link href="/work" passHref>
            <NavLink>/work</NavLink>
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
