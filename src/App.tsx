import { Header } from "./atomic-components/molecule/header";

import avatar from "./assets/img.png"
import { Separator } from "./components/ui/separator";

export function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <Separator className="mb-4" />

      <main className="flex items-center justify-around" >
        <div className="flex flex-col leading-relaxed">
          <h1 className="font-black">Hello, I'm Guilherme, front-end develope</h1>
          <p className=" w-[315px] ">Former digital-marketing specialist, seeking to aplly competent development skills with focus on collaboration, communication and passion.</p>
        </div>
          <img className="size-72" src={avatar} />
      </main>
    </div>

  )
}