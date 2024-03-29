import { ClientOnly, Container, EmptyState, ListingCard } from '@/components'
import getListings, { IListingsParams } from './actions/getListings'
import getCurrentUser from './actions/getCurrentUser'

interface HomeProps {
  searchParams: IListingsParams
}

const Home = async ({ searchParams }: HomeProps) => {

  const listings = await getListings(searchParams)
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 
          md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
          2xl:grid-cols-6 gap-8 pt-24"
        >
          {listings.map((listing) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  )
}

export default Home
