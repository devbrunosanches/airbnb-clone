"use client"

import React from 'react'
import Image from "next/image"

import { useCountries } from "@/hooks"
import { SafeUser } from "@/app/types"
import { Heading, HeartButton } from "@/components"

interface ListingHeadProps {
    title: string;
    locationValue: string;
    imageSrc: string;
    id: string;
    currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    locationValue,
    imageSrc,
    id,
    currentUser
}) => {

    const { getByValue } = useCountries()

    const location = getByValue(locationValue)

    return (
        <>
            <Heading
                title={title}
                subtitle={`${location?.region}, ${location?.label}`}
            />
            <div className="relative w-full h-[60vh] overflow-hidden 
                rounded-xl"
            >
                <Image
                    src={imageSrc}
                    alt="Image"
                    fill
                    className="object-cover w-full"
                />
                <div className="absolute top-5 right-5">
                    <HeartButton
                        listingId={id}
                        currentUser={currentUser}
                    />
                </div>
            </div>
        </>
    )
}

export default ListingHead