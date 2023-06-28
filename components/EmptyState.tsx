"use client"

import React from "react"
import { useRouter } from "next/navigation"

import Button from "./Button"
import Heading from "./Heading"

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    title = "No exact matches",
    subtitle = "Try changing or removing some of your filters.",
    showReset
}) => {

    const router = useRouter()

    return (
        <div className="flex flex-col justify-center
            items-center h-[60vh] gap-2"
        >
            <Heading
                title={title}
                subtitle={subtitle}
                center
            />
            <div className="w-48 mt-4">
                {showReset && (
                    <Button
                        label="Remove all filters"
                        outline
                        onClick={() => router.push('/')}
                    />
                )}
            </div>
        </div>
    )
}

export default EmptyState