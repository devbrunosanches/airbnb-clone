"use client"

import React from 'react'
import { IconType } from 'react-icons';

interface CategoryInputProps {
    label: string;
    icon: IconType;
    selected?: boolean;
    onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    label,
    icon: Icon,
    selected,
    onClick
}) => {
    return (
        <div className={`
            flex flex-col rounded-xl border-2 p-4 gap-3 transition
            cursor-pointer hover:border-rose-600
            ${selected ? 'border-rose-600' : 'border-black'}
            ${selected ? 'text-rose-600' : 'text-black'}
        `}
        >
            <Icon size={30} />
            <div className="font-semibold">
                {label}
            </div>
        </div>
    )
}

export default CategoryInput