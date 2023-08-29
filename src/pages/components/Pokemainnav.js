import Link from "next/link";

const Pokemainnav = () => {
  return (
    <nav>
      <ul>  
        <li><Link href="/">Home</Link></li>
        <li><Link href="/pokedex">Pokedex</Link></li>
        <li><Link href="/apps">Video Games & apps</Link></li>
      </ul>
    </nav>
  );
}

export default Pokemainnav;