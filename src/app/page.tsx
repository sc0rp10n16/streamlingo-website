"use client";
import { assets } from "@/utils/asset-utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { frameworks, type Framework } from "@/utils/framework-utils";
import { useState, useEffect } from "react";
import { cn } from "@/utils/tailwind-utils";
import animationData from "@/components/voiceAi.json";
import Lottie from "lottie-react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Instagram, LinkedinIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { User } from "@clerk/nextjs/server";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  const [docEnv, setDocEnv] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setDocEnv(true);
    }
  }, []);
  const createWaitlist = useMutation(api.waitlists.createWaitlist);

  const [currentFramework, setCurrentFramework] = useState<Framework>(
    frameworks[0],
  );

  const [showBackground, setShowBackground] = useState(false);

  const [email, setEmail] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length;
    };
    const intervalId = setInterval(rotateFrameworks, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 no-scrollbar">
      <div
        className={cn(
          "fixed inset-0 transition-colors delay-100 duration-700 opacity-100",
          {
            "bg-purple-300": currentFramework === "qwik",
            "bg-sky-300": currentFramework === "safari",
            "bg-yellow-300": currentFramework === "chrome",
            "bg-teal-300": currentFramework === "tailwind",
            "bg-blue-300": currentFramework === "react",
            "bg-green-300": currentFramework === "vue",
            "bg-orange-400": currentFramework === "svelte",
            "bg-red-300": currentFramework === "mobile",
            "bg-neutral-300": currentFramework === "desktop",
          },
        )}
      />
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradient background"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}
      />
      {/* <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: "30px",
        }}
      /> */}

      <div className="max-w-3xl mt-10 w-full">
        <div className="h-full lg:min-h-screen justify-center items-center w-full font-bold p-4 sm:p-8">
          <Lottie animationData={animationData}  style={{  }} />
        </div>
        <div className="flex flex-col items-center mt-20 relative z-10">
          <h1
            className={`text-3xl sm:text-5xl md:text-7xl max-w-3xl text-white text-center leading-snug mb-6 sm:mb-8 md:mb-12 ${poppins.className}`}
          >
            Revolutionize Your Meetings with{" "}
            <span
              className={cn("transition-colors duration-200", {
                "text-purple-300": currentFramework === "qwik",
                "text-sky-300": currentFramework === "safari",
                "text-yellow-300": currentFramework === "chrome",
                "text-teal-300": currentFramework === "tailwind",
                "text-blue-300": currentFramework === "react",
                "text-green-300": currentFramework === "vue",
                "text-orange-400": currentFramework === "svelte",
                "text-red-300": currentFramework === "mobile",
                "text-neutral-300": currentFramework === "desktop",
              })}
            >
              StreamLingo
            </span>{" "}
          </h1>
          <p className="text-gray-300 mb-4 sm:mb-6 md:mb-8 text-lg sm:text-xl md:text-2xl text-center">
            Experience seamless communication, real-time translations, and
            powerful AI tools.
          </p>
          {/* <p className="text-gray-300 mb-4 sm:mb-6 md:mb-8 text-lg sm:text-xl md:text-2xl text-center">
            StreamLingo VoiceSync transforms your online meetings with advanced
            features like real-time language translations, interactive
            AI-powered tools, attendance tracking, and superior voice clarity.
            Join our waitlist to be the first to experience the future of
            business communication.
          </p> */}
          {/* <div className="h-full justify-center items-center w-full font-bold p-4 sm:p-8">
          <Lottie animationData={animationData}  style={{  }} />
        </div> */}
          <div className="mb-4 sm:mb-6 md:mb-8 w-full flex item-center justify-center">
            
              
             
                  <button
                    
                    className={cn(
                      "text-black text-lg sm:text-xl md:text-2xl px-6 py-3 rounded-md font-semibold transition-colors duration-200",
                      {
                        "bg-purple-300": currentFramework === "qwik",
                        "bg-sky-300": currentFramework === "safari",
                        "bg-yellow-300": currentFramework === "chrome",
                        "bg-teal-300": currentFramework === "tailwind",
                        "bg-blue-300": currentFramework === "react",
                        "bg-green-300": currentFramework === "vue",
                        "bg-orange-400": currentFramework === "svelte",
                        "bg-red-300": currentFramework === "mobile",
                        "bg-neutral-300": currentFramework === "desktop",
                      },
                    )}
                  >
                    <Link href="/Recordings">Get Started</Link>
                  </button>
                

          </div>
          {/* <div className="h-full justify-center items-center w-full font-bold p-4 sm:p-8">
          <Lottie animationData={animationData}  style={{  }} />
        </div> */}
          <div className="items-center justify-center text-center">
            <p className="text-center text-gray-200 text-xl sm:text-2xl md:text-3xl font-bold mb-4 mt-8">
              Follow us to stay updated
            </p>
            <div className="mb-4 sm:mb-6 md:mb-8 flex items-center text-center justify-center text-gray-400 gap-5">
              <Link href="https://www.instagram.com/oscowl_/?hl=en">
                <Instagram className="text-3xl hover:text-pink-600" size={30} />
              </Link>
              <Link href="https://in.linkedin.com/company/oscowl">
                <LinkedinIcon
                  className="text-3xl hover:text-blue-500"
                  size={30}
                />
              </Link>
              <Link href="https://twitter.com/oscowl_">
                <FaXTwitter className="text-3xl hover:text-white" size={30} />
              </Link>
            </div>
          </div>
          <div className="bottom-0 w-full text-gray-500 text-center text-lg sm:text-xl md:text-2xl mb-4 p-5">
            © 2024 <Link href="https://www.oscowl.in/">OSCOWL™</Link>. All
            Rights Reserved.
          </div>
        </div>
      </div>
    </main>
  );
}
