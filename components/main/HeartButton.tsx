"use client"

import React from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

import { useFavorite } from "@/hooks"
import { SafeUser } from "@/app/types"

interface HeartButtonProps {
    listingId: string;
    currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser
}) => {

    const { hasFavorited, toggleFavorite } = useFavorite({
        listingId,
        currentUser
    })

    return (
        <div className="relative opacity-75 hover:opacity-90 
            transition cursor-pointer"
            onClick={toggleFavorite}
        >
            <AiOutlineHeart
                className="absolute fill-white -top-[2px] -right-[2px]"
                size={35}
            />
            <AiFillHeart
                className=
                {hasFavorited ? 'fill-red-600' : 'fill-rose-300'}
                size={30}
            />
        </div>
    )
}

export default HeartButton