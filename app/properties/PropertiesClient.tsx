"use client"

import React, { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import axios from "axios"

import { SafeListing, SafeUser } from "@/app/types"
import { Heading, Container, ListingCard } from "@/components"

interface PropertiesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
    listings,
    currentUser
}) => {

    const router = useRouter()
    const [deletingId, setDeletingId] = useState('')

    const onDelete = useCallback((id: string) => {
        setDeletingId(id)

        axios.delete(`/api/listings/${id}`)
            .then(() => {
                toast.success('Listing deleted')
                router.refresh()
            })
            .catch((error) => {
                toast.error(error?.response?.data?.error)
            })
            .finally(() => {
                setDeletingId('')
            })
    }, [router])


    return (
        <Container>
            <Heading
                title="Properties"
                subtitle="List of your properties"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 
                md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
                2xl:grid-cols-6 gap-8 mt-10"
            >
                {listings.map((listing) => (
                    <ListingCard
                        key={listing.id}
                        data={listing}
                        actionId={listing.id}
                        onAction={onDelete}
                        disabled={deletingId === listing.id}
                        actionLabel="Delete property"
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    )
}

export default PropertiesClient