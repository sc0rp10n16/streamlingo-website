
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between bg-slate-600 shadow-sm p-2 border-b border-slate-600">
      <Link href="/dashboard" className="flex text-2xl font-bold">
        Streamlingo <span className="text-red-500">{'   '}Voicesync</span>
      </Link>
      <SignedIn>
        <div>
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}
export default Header;
