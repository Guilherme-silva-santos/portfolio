/* eslint-disable react/no-unescaped-entities */
import { Header } from './atomic-components/molecule/header'

import avatar from './assets/img.png'
import { Separator } from './components/ui/separator'
import { Button } from './components/ui/button'
import { CaretRight } from '@phosphor-icons/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card'

export function App() {
  const dataToCard = [
    {
      name: 'Sistema de Gestão Escolar',
      tecnologia: 'React, Redux, JavaScript, HTML, CSS',
      description:
        'Um sistema web para gestão de escolas, permitindo aos administradores gerenciar alunos, professores, disciplinas e notas.',
    },
    {
      name: 'Blog Pessoal',
      technology: 'Vue.js, JavaScript, HTML, CSS',
      description:
        'Um blog pessoal onde os usuários podem criar e compartilhar postagens sobre seus interesses e experiências.',
    },
    {
      name: 'Loja Virtual',
      technology: 'Angular, TypeScript, HTML, CSS',
      description:
        'Uma aplicação de comércio eletrônico onde os usuários podem navegar por diferentes produtos, adicionar itens ao carrinho e realizar compras.',
    },
    {
      name: 'Loja Virtual',
      technology: 'Angular, TypeScript, HTML, CSS',
      description:
        'Uma aplicação de comércio eletrônico onde os usuários podem navegar por diferentes produtos, adicionar itens ao carrinho e realizar compras.',
    },
    {
      name: 'Loja Virtual',
      technology: 'Angular, TypeScript, HTML, CSS',
      description:
        'Uma aplicação de comércio eletrônico onde os usuários podem navegar por diferentes produtos, adicionar itens ao carrinho e realizar compras.',
    },
    {
      name: 'Loja Virtual',
      technology: 'Angular, TypeScript, HTML, CSS',
      description:
        'Uma aplicação de comércio eletrônico onde os usuários podem navegar por diferentes produtos, adicionar itens ao carrinho e realizar compras.',
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <Separator className="mb-4" />

      <main className="flex flex-row items-center justify-around flex-wrap">
        <div className="leading-relaxed">
          <h1 className="font-black flex-nowrap text-2xl">
            Hello, I'm Guilherme, front-end developer
          </h1>
          <p className=" w-[415px] ">
            Former digital-marketing specialist, seeking to aplly competent
            development skills with focus on collaboration, communication and
            passion.
          </p>
          <Button className="flex items-center gap-x-2 mt-2 bg-slate-700 hover:bg-slate-800">
            Saiba mais
            <CaretRight />
          </Button>
        </div>
        <img className="size-72" src={avatar} alt="Avatar" />
      </main>
      <div className="flex flex-wrap justify-evenly gap-y-5">
        {dataToCard.map((projeto, index) => (
          <div key={index} className="">
            <Card className="flex flex-col justify-center max-w-[380px] max-h-">
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
          </div>
        ))}
      </div>
    </div>
  )
}
