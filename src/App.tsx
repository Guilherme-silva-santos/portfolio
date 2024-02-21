import { Header } from "./atomic-components/molecule/header";

import avatar from "./assets/img.png"
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { CaretRight } from "@phosphor-icons/react";

export function App() {
  return (
    <div className="min-h-screen space-y-2">
      <Header />

      <Separator className="mb-4" />

      <main className="flex flex-row items-center justify-around flex-wrap" >
        <div className="leading-relaxed">
          <h1 className="font-black flex-nowrap text-2xl">Hello, I'm Guilherme, front-end developer</h1>
          <p className=" w-[415px] ">Former digital-marketing specialist, seeking to aplly competent development skills with focus on collaboration, communication and passion.</p>
          <Button className="">Saiba mais<CaretRight/></Button>
        </div>
          <img className="size-72" src={avatar} />
      </main>
    </div>

  )
}