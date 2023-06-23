"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { logo } from '@/assets'

const Logo = () => {

    const router = useRouter()

    return (
        <Image
            src={logo}
            alt='airbnb-logo'
            width={45}
            height={45}
            className='md:block cursor-pointer object-contain' //hidden
        />
    )
}

export default Logo