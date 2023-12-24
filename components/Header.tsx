'use client'

import Link from "next/link"
import {Fragment,useState} from 'react';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {
ChatBubbleLeftIcon,
ChevronDownIcon,
HomeIcon,
PaperAirplaneIcon,
PhoneIcon,
PlayCircleIcon
} from "@heroicons/react/20/solid"
import {Dialog, Disclosure, Popover, Transition} from "@headlessui/react"

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-[#013B94]">
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"arial-label="Global" >
    
    <div className="flex lg:flex-1">
    <Link href='/' className='-m-1.5 p-1.5'>
        <span className="sr-only">Booking.com</span>
        <img className="h-12 w-auto" 
        src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w" alt=""/>
    </Link>
    </div>
    <div className="flex lg:hidden">
        <button 
        type='button'
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
        onClick={ ()=> setMobileMenuOpen(true) }>
            <span className="sr-only"> Open main menu </span>
            <Bars3Icon className="h-6 w-6" aria-hidden= "true" />
        </button>
    </div>

    <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white ">
                Stays
                <ChevronDownIcon 
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"/>
            </Popover.Button>

            <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
            >

            </Transition>

        </Popover>
    </Popover.Group>
    </nav> 
    </header>
  )
}

export default Header
