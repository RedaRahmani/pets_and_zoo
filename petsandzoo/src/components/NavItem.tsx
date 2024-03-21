"use client"
import { PRODUCT_CATEGORIES } from "@/config"
import {Button} from "./ui/button"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps{
    category: Category
    handelOpen:() =>void
    isOpen: boolean
    isAnyOpen: boolean
}
const NavItem = ({isAnyOpen, category, handelOpen, isOpen}: NavItemProps) => {
    return <div className="flex">
        <div className="relative flex items-center">
            <Button className="gap-1.5" onClick={handelOpen} variant={isOpen ? "secondary" : "ghost"}>
                {category.label}
                <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", {
                    "-rotate-180": isOpen,
                    
                })} />
            </Button>
        </div>
    </div>
}

export default NavItem