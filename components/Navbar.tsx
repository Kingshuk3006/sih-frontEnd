import { useUser } from '@/context/userContext'
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '../app/lib/chakraui'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Logout } from '@/functions/auth/logout'

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false)
    const { user } = useUser()
    const router = useRouter()

    return (
        <div className="sticky top-0 z-50 h-20 px-8 py-4 flex justify-between items-center text-white font-semibold bg-[#221389] shadow-lg">
            <div className="flex justify-between items-center w-[200px]">
                <Link href="/">
                    <img src="/Frame.svg" className="w-12" />
                </Link>
                <a href="/" className=" font-bold text-lg">
                    DERMACURE.AI
                </a>
            </div>

            <li className="flex justify-end items-center space-x-8">
                <ul className="cursor-pointer hover:scale-105 transition-all duration-150">
                    <a href="/#home">Home</a>
                </ul>
                <ul className="cursor-pointer hover:scale-105 transition-all duration-150">
                    <a href={'/#benefits'}>Benefits</a>
                </ul>
                <ul className="cursor-pointer hover:scale-105 transition-all duration-150">
                    <a href="/#testimonial">Testimonial</a>
                </ul>
                <ul className="cursor-pointer hover:scale-105 transition-all duration-150">
                    <a href="/#contact">Contact Us</a>
                </ul>
                {user?.UserId ? (
                    <Menu>
                        <MenuButton>
                            <Avatar name={user.username} size={'sm'} cursor={'pointer'} onClick={() => setOpen(true)} />
                        </MenuButton>
                        <MenuList fontWeight={'400'}>
                            <MenuItem onClick={() => router.push('/profile?currentTab=personalDetails')}>
                                Profile
                            </MenuItem>
                            <MenuItem onClick={() => Logout()}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                ) : (
                    <Link href="/auth/login">
                        <button className="h-[52px] w-[148px] rounded-3xl bg-white text-[#221389]">
                            Register/Login
                        </button>
                    </Link>
                )}
            </li>
        </div>
    )
}

export default Navbar
