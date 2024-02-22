import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export function Header() {
  return (
    <header>
      <nav>
        <ul className="text-zinc-50 flex justify-around items-center flex-wrap py-7">
          <li>
            <h1 className="font-black size-4 whitespace-nowrap ">
              I.M portifolio
            </h1>
          </li>
          <li className="flex gap-x-14 font-bold">
            <a className=" hover:text-slate-400" href="#">
              Projects
            </a>
            <a className=" hover:text-slate-400" href="#">
              Technologies
            </a>
            <a className=" hover:text-slate-400" href="#">
              About me
            </a>
          </li>
          <li className="flex gap-x-2">
            <a className=" hover:text-slate-400" href="#">
              <LinkedinLogo className="w-6 h-6" />
            </a>
            <a className=" hover:text-slate-400" href="#">
              <GithubLogo className="w-6 h-6" />
            </a>
            <a className=" hover:text-slate-400" href="#">
              <InstagramLogo className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
