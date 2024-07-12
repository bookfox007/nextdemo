
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link> | <Link href="/users">Users</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© 2024 My Next.js App</footer>
    </div>
  );
}
