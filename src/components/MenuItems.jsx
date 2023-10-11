import Link from 'next/link'
import React from 'react'

export default function MenuItems({title,address,Icon}) {
  return (
    <div>
        <Link className="mx-4 lg:mx-6 hover:text-amber-600" href={address}>
            <Icon className="text-2xl sm:hidden inline"/>
            <p className="my-2 hidden sm:inline text-sm">{title}</p>
        </Link>
    </div>
  )
}
