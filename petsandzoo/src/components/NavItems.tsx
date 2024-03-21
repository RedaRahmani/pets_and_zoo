"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useState } from "react"
import NavItem from "./NavItem"

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<
    null | number
    >(null)

    const isAnyOpen = activeIndex !== null

    return <div className="flex gap-4 h-full">
        {PRODUCT_CATEGORIES.map((category, i) => {
            const handleOpen = () => {
                if(activeIndex === i ) {
                    setActiveIndex(null)
                }else {
                    setActiveIndex(i)
                }
            }
            const isOpen = i === activeIndex
            return (
                <NavItem category ={category} 
                handelOpen={handleOpen} 
                isOpen={isOpen}
                key={category.value}
                isAnyOpen={isAnyOpen} />
            )
        })}
    </div>
}

export default NavItems