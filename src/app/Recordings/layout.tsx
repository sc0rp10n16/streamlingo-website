import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { assets } from "@/utils/asset-utils";
import { ClerkLoaded } from "@clerk/nextjs";
import Image from "next/image";

function RecordingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkLoaded>
      <div className="flex flex-col flex-1 h-screen bg-slate-900 text-gray-300">
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </ClerkLoaded>
  );
}
export default RecordingsLayout;
