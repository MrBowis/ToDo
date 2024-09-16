import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="">
      <div className="">
        <Link href="/">
          MyApp
        </Link>
      </div>
      <ul className="">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/register">
            Sign In
          </Link>
        </li>
        <li>
          <Link href="/login">
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;