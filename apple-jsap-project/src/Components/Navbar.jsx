import { menuItems } from "../Constants";

export default function Navbar() {
  
  return (
    <header>
      <nav className="px-[5%]">
        <img src="/logo.svg" alt="apple-logo" />
        <ul>
            {menuItems.map((e, index) => (
          <li key={index}>
            <a href={e}>{e}</a>
          </li>
        ))}
        </ul>

        <div>
          <button>
            <img src="/search.svg" alt="Search-Icon" />
          </button>
          <button>
            <img src="/cart.svg" alt="Search-Icon" />
          </button>
        </div>
        
      </nav>
    </header>
  );
}
