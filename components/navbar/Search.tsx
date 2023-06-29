"use client"

import React, { useMemo } from 'react'
import { differenceInDays } from 'date-fns'
import { useSearchParams } from 'next/navigation'

import { BiSearch } from 'react-icons/bi'

import { useCountries, useSearchModal } from '@/hooks'

const Search = () => {

    const searchModal = useSearchModal()

    const params = useSearchParams()

    const { getByValue } = useCountries()

    const locationValue = params?.get('locationValue')
    const startDate = params?.get('startDate')
    const endDate = params?.get('endDate')
    const guestCount = params?.get('guestCount')

    const locationLabel = useMemo(() => {
        if (locationValue) {
            return getByValue(locationValue as string)?.label
        }

        return 'Anywhere'
    }, [locationValue, getByValue])

    const durationLabel = useMemo(() => {
        if (startDate && endDate) {
            const start = new Date(startDate as string)
            const end = new Date(endDate as string)
            let diff = differenceInDays(end, start)

            if (diff === 0) {
                diff = 1
            }

            return `${diff} Days`
        }

        return 'Any Week'
    }, [startDate, endDate])

    const guestLabel = useMemo(() => {
        if (guestCount) {
            return `${guestCount} Guests`
        }

        return 'Add Guests'
    }, [guestCount])

    return (
        <div className='border-[1px] w-full md:w-auto py-2
        rounded-full shadow-sm hover:shadow-md transition
        cursor-pointer'
            onClick={searchModal.onOpen}
        >
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-6">
                    {locationLabel}
                </div>
                <div className="sm:block text-sm
                    font-semibold px-6 border-x-[1px]
                    flex-1 text-center" //hidden
                >
                    {durationLabel}
                </div>
                <div className="flex flex-row text-sm pl-6 pr-2
                    text-gray-900 items-center gap-3"
                >
                    <div className="sm:block"
                    // hidden
                    >
                        {guestLabel}
                    </div>
                    <div className="p-2 rounded-full text-white
                        bg-rose-600"
                    >
                        <BiSearch size={18} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search