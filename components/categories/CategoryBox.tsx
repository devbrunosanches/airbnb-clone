"use client"

import React, { useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import { IconType } from 'react-icons'

interface CategoryBoxProps {
    label: string;
    icon: IconType;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    label,
    icon: Icon,
    selected,
}) => {

    const router = useRouter()
    const params = useSearchParams()

    const handleClick = useCallback(() => {
        let currentQuery = {}

        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label,
        }

        if (params?.get('category') === label) {
            delete updatedQuery.category
        }

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery,
        }, { skipNull: true })

        router.push(url)

    }, [label, params, router])

    return (
        <div className={`flex flex-col justify-center items-center
        gap-2 p-3 border-b-2 transition cursor-pointer
        hover:text-rose-600
        ${selected ? 'border-b-rose-600' : 'border-transparent'}
        ${selected ? 'text-rose-600' : 'text-black'}
        `}
            onClick={handleClick}
        >
            <Icon size={24} />
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
    )
}

export default CategoryBox