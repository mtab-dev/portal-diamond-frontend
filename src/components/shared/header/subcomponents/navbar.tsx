import Link from "next/link";

export default function NavBar() {
  return (
    <div className="hidden md:flex flex-row justify-around items-center gap-6 ">
      <Link href="/about">Home</Link>
 
    </div>
  );
}
