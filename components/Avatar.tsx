"use client"

import React from 'react'
import Image from 'next/image'

import { avatar } from '@/assets'

const Avatar = () => {
    return (
        <Image
            src={avatar}
            alt='avatar'
            width={45}
            height={45}
            className='rounded-full object-contain'
        />
    )
}

export default Avatar