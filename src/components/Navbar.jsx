import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className="flex justify-center p-4 dark:bg-gray-600 lg:text-lg bg-amber-100">
        <NavbarItem title="Trending" params="FetchTrending" />
        <NavbarItem title="Top Rated" params="FetchTopRated" />
    </div>
  )
}
