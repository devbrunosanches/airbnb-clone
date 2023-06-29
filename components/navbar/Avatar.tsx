"use client"

import React from 'react'
import Image from 'next/image'

import { avatar } from '@/assets'

interface AvatarProps {
    src: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({
    src,
}) => {
    return (
        <Image
            src={src || avatar}
            alt='avatar'
            width={45}
            height={45}
            className='rounded-full object-contain'
        />
    )
}

export default Avatar