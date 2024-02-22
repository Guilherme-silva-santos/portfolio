/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { Header } from './atomic-components/molecule/header'

import avatar from './assets/img.png'
import { Separator } from './components/ui/separator'
import { Button } from './components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card'
import { DownloadIcon } from '@radix-ui/react-icons'

export function App() {
  const [dataToCard] = useState([
    {
      id: 1,
      name: 'Blog Pessoal',
      technology: 'Vue.js, JavaScript, HTML, CSS',
      description:
        'Um blog pessoal onde os usuários podem criar e compartilhar postagens sobre seus interesses e experiências.',
    },
    {
      id: 1,
      name: 'Blog Pessoal',
      technology: 'Vue.js, JavaScript, HTML, CSS',
      description:
        'Um blog pessoal onde os usuários podem criar e compartilhar postagens sobre seus interesses e experiências.',
    },
    {
      id: 1,
      name: 'Blog Pessoal',
      technology: 'Vue.js, JavaScript, HTML, CSS',
      description:
        'Um blog pessoal onde os usuários podem criar e compartilhar postagens sobre seus interesses e experiências.',
    },
    {
      id: 1,
      name: 'Blog Pessoal',
      technology: 'Vue.js, JavaScript, HTML, CSS',
      description:
        'Um blog pessoal onde os usuários podem criar e compartilhar postagens sobre seus interesses e experiências.',
    },
    {
      id: 1,
      name: 'Blog Pessoal',
      technology: 'Vue.js, JavaScript, HTML, CSS',
      description:
        'Um blog pessoal onde os usuários podem criar e compartilhar postagens sobre seus interesses e experiências.',
    },
    {
      id: 1,
      name: 'Blog Pessoal',
      technology: 'Vue.js, JavaScript, HTML, CSS',
      description:
        'Um blog pessoal onde os usuários podem criar e compartilhar postagens sobre seus interesses e experiências.',
    },
    {
      id: 1,
      name: 'Blog Pessoal',
      technology: 'Vue.js, JavaScript, HTML, CSS',
      description:
        'Um blog pessoal onde os usuários podem criar e compartilhar postagens sobre seus interesses e experiências.',
    },
    {
      id: 1,
      name: 'Blog Pessoal',
      technology: 'Vue.js, JavaScript, HTML, CSS',
      description:
        'Um blog pessoal onde os usuários podem criar e compartilhar postagens sobre seus interesses e experiências.',
    },
  ])

  return (
    <div className="min-h-screen space-y-2 px-6">
      <Header />

      <Separator className="mb-4" />

      <main className="flex-col justify-center items-center">
        <section className="flex flex-row items-center justify-around flex-wrap">
          <div className="leading-relaxed">
            <h1 className="font-black flex-nowrap text-2xl">
              Hello, I'm Guilherme, front-end developer
            </h1>
            <p className="w-[415px]">
              Former digital-marketing specialist, seeking to aplly competent
              development skills with focus on collaboration, communication and
              passion
            </p>
            <Button className="flex gap-3 font-bold my-4 hover:bg-slate-500  bg-slate-600">
              <a href="cv.pdf" download="cv.pdf">
                Download CV
              </a>
              <DownloadIcon />
            </Button>
          </div>
          <div></div>
          <img className="size-72" src={avatar} alt="Avatar" />
        </section>
        <section className="flex flex-1 flex-wrap gap-x-2 justify-center">
          {dataToCard.map((projeto) => (
            <Card
              key={projeto.id}
              className=" mt-6 max-w-[380px] max-h-[230px]"
            >
              <CardHeader>
                <CardTitle>{projeto.name}</CardTitle>
                <CardDescription>{projeto.technology}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{projeto.description}</p>
              </CardContent>
              <CardFooter>
                <p>lorem ipsum dolor sit amet, con</p>
              </CardFooter>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}
