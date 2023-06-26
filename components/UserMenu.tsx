"use client"

import React, { useCallback, useState } from 'react'
import { signOut } from 'next-auth/react'

import { AiOutlineMenu } from 'react-icons/ai'

import Avatar from './Avatar'
import MenuItem from './MenuItem'
import { useLoginModal, useRegisterModal } from '@/hooks'
import { SafeUser } from '@/app/types'

interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser,
}) => {

    const registerModal = useRegisterModal()

    const loginModal = useLoginModal()

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    return (
        <div className='relative'>
            <div className="flex flex-row items-center gap-3">
                <div className="text-sm font-semibold py-3 px-4
                rounded-full transition cursor-pointer
                md:block hover:bg-rose-600 hidden" // hidden
                    onClick={() => { }}
                >
                    Airbnb your home
                </div>
                <div className="flex flex-row items-center p-3
                    md:py-1 md:px-2 gap-3 rounded-full transition
                    border-[1px] border-neutral-300 cursor-pointer
                    hover:shadow-md"
                    onClick={toggleOpen}
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow-md
                    w-[40vw] md:w-3/4 bg-white overflow-hidden
                    right-0 top-12 text-sm"
                >
                    <div className="flex flex-col cursor-pointer">

                        {currentUser ? (
                            <>
                                <MenuItem
                                    onClick={() => {}}
                                    label='My trips'
                                />
                                <MenuItem
                                    onClick={() => {}}
                                    label='My favorites'
                                />
                                <MenuItem
                                    onClick={() => {}}
                                    label='My reservations'
                                />
                                <MenuItem
                                    onClick={() => {}}
                                    label='My properties'
                                />
                                <MenuItem
                                    onClick={() => {}}
                                    label='Airbnb my home'
                                />
                                <hr />
                                <MenuItem
                                    onClick={() => signOut()}
                                    label='Logout'
                                />
                            </>

                        ) : (

                            <>
                                <MenuItem
                                    onClick={loginModal.onOpen}
                                    label='Login'
                                />
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label='Sign Up'
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu