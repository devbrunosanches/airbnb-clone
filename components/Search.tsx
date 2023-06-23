"use client"

import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div className='border-[1px] w-full md:w-auto py-2
        rounded-full shadow-sm hover:shadow-md transition
        cursor-pointer'
        >
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-6">
                    Anywhere
                </div>
                <div className="sm:block text-sm
                    font-semibold px-6 border-x-[1px]
                    flex-1 text-center" //hidden
                >
                    Any Week
                </div>
                <div className="flex flex-row text-sm pl-6 pr-2
                    text-gray-900 items-center gap-3"
                >
                    <div className="sm:block"
                    // hidden
                    >
                        Add Guests
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