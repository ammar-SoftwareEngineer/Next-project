
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "../globals.css";


const navLinks = [
  {
    name: "Register", href: "/register"
  }
  , {
    name: "Login", href: "/login"
  }
  , {
    name: "Forget password", href: "/forget-password"
  }
]


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <html>
      <body>
        <div>
          {navLinks.map((e, index) => {
            return <ul key={index}>
              <li>
                <Link href={e.href}> {e.name}</Link>
              </li>
            </ul>
          })}
        </div>
      </body>
    </html>
  );
}
