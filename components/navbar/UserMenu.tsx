"use client"

import React, { useCallback, useState } from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { AiOutlineMenu } from 'react-icons/ai'

import { Avatar, MenuItem } from '@/components'
import { useLoginModal, useRegisterModal, useRentModal } from '@/hooks'
import { SafeUser } from '@/app/types'

interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser,
}) => {

    const router = useRouter()

    const registerModal = useRegisterModal()

    const loginModal = useLoginModal()

    const rentModal = useRentModal()

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    const onRent = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen()
        }
        rentModal.onOpen()
    }, [currentUser, loginModal, rentModal])

    return (
        <div className='relative'>
            <div className="flex flex-row items-center gap-3">
                <div className="text-sm font-semibold py-3 px-4
                rounded-full transition cursor-pointer
                md:block hover:bg-rose-600 hidden"
                    onClick={onRent}
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
                                    label='My trips'
                                    onClick={() => router.push('/trips')}
                                />
                                <MenuItem
                                    label='My favorites'
                                    onClick={() => router.push('/favorites')}
                                />
                                <MenuItem
                                    label='My reservations'
                                    onClick={() => router.push('/reservations')}
                                />
                                <MenuItem
                                    label='My properties'
                                    onClick={() => router.push('/properties')}
                                />
                                <MenuItem
                                    label='Airbnb your home'
                                    onClick={rentModal.onOpen}
                                />
                                <hr />
                                <MenuItem
                                    label='Logout'
                                    onClick={() => signOut()}
                                />
                            </>

                        ) : (

                            <>
                                <MenuItem
                                    label='Login'
                                    onClick={loginModal.onOpen}
                                />
                                <MenuItem
                                    label='Sign Up'
                                    onClick={registerModal.onOpen}
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