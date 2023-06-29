import { EmptyState, ClientOnly } from "@/components"
import getCurrentUser from "@/app/actions/getCurrentUser"
import getListings from "@/app/actions/getListings"
import PropertiesClient from "./PropertiesClient"

const PropertiesPage = async () => {

    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return (
            <EmptyState
                title="Unauthorized"
                subtitle="Please login"
            />
        )
    }

    const listings = await getListings({ userId: currentUser.id })

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No properties found"
                    subtitle="You have no properties to rent"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <PropertiesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default PropertiesPage