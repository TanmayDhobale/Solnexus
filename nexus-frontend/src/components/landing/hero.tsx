"use client";
import { Bot, LayoutDashboard, Shapes } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import Particles from "../ui/particles";
import GlowBox from "./glow-box";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { connected } = useWallet();
  const router = useRouter();
  return (
    <>
      <div className="flex relative mb-40 flex-col items-center max-h-fit w-full border-red-500">
        <div className="top-[15rem] md:top-[5rem] left-[20%] z-[-1] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary to-blue-900  blur-[8em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out w-[10rem] md:w-[10rem] h-[20rem] md:h-[60rem] rotate-[54deg]"></div>
        <div className="-top-[35rem] opacity-10 rotate-[124deg] left-[20%] z-[-1] absolute bg-gradient-to-t dark:opacity-100 from-primary to-blue-900  blur-[8em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out w-[10rem] md:w-[10rem] h-[20rem] md:h-[60rem]"></div>

        {/* <div className="top-[-20rem] md:top-[-40rem] -left-[50%rem] z-[-1] absolute bg-gradient-to-t from-primary to-blue-300 opacity-50  blur-[4em] md:blur-[8em] rounded-full w-[10rem] md:w-[30rem] h-[20rem] md:h-[40rem] transition-all duration-700 ease-out rotate-[50deg]"></div> */}
        {/* <div className="bottom-[-12rem] right-[10%] z-[-1] absolute bg-gradient-to-t from-primary to-blue-800 blur-[4em] md:blur-[4em] rounded-full w-[10rem] md:w-[20rem] h-[20rem] md:h-[20rem] transition-all duration-700 ease-out rotate-[50deg]"></div> */}

        <div className="mt-20 text-center">
          <div className="text-6xl flex font-medium items-center">
            Revolutionizing{" "}
            <div className="flex items-center gap-2 mx-2 border-2 px-4 py-1 border-primary rounded-xl">
              <Bot className="text-white w-10 h-10" />
              <span className="bg-gradient-to-r flex items-center from-primary to bg-cyan-400 bg-clip-text text-transparent font-semibold">
                AI
              </span>
            </div>{" "}
            marketplaces
          </div>
          <div className="text-6xl mt-2">
            on{" "}
            <span className="bg-gradient-to-r from-primary to bg-cyan-400 bg-clip-text text-transparent font-semibold">
              Solana
            </span>{" "}
            Blockchain.
          </div>
        </div>
        <div className="mt-6 text-lg w-[40%] text-center">
          A modern, decentralized marketplace for AI agents built on the Solana
          blockchain.
        </div>

        <div className="mt-10 flex items-center gap-4">
          {/* <Button>Connect Wallet</Button> */}
          {connected ? (
            <Button onClick={() => router.push("/dashboard")}>
              <LayoutDashboard className="w-2 h-2" /> Go to Dashboard
            </Button>
          ) : (
            <WalletMultiButton className="!bg-indigo-600 !hover:bg-indigo-700 transition-colors" />
          )}
          <Button variant={"ghost"}>
            <Shapes className="w-2 h-2" />
            <span> Learn more</span>
          </Button>
        </div>
        <Particles
          className="absolute inset-0"
          quantity={300}
          ease={200}
          color={"#0565ff"}
          refresh
        />
      </div>
    </>
  );
}