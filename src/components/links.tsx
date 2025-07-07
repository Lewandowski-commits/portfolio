import React from 'react'
import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:hello@lewandowskimichal.tech',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/Lewandowski-commits',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/lewandowskimicha%C5%82/',
    },
    {
      icon: SiMedium,
      href: 'https://medium.com/@LewandowskiMichal',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon />
          </a>
        )
      })}
    </div>
  )
}
