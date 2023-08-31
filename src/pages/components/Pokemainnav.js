import Link from "next/link";

const Pokemainnav = () => {
  return (
    <nav className="main-nav">
      <ul className="nav d-flex">  
        <li className="nav-active"><Link href="/">Home</Link></li>
        <li><Link href="/pokedex">Pokedex</Link></li>
      </ul>
    </nav>
  );
}

export default Pokemainnav;