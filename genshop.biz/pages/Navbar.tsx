import Link from 'next/link';

// This defines the value types paired to the keys
type NavItem = {
  label: string
  href: string
}

// This is for your navigation links or items
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contacts', href: '/contacts' },
  { label: 'Login', href: '/login' },
]

const Navbar: React.FC = () => {
  return (
    <nav className='flex bg-red-400'>
      <ul /* className={styles.navList} */>
        {navItems.map((item) => (
          <li key={item.href} /* className={styles.navItem} */>
            <Link href={item.href}>
                  {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar