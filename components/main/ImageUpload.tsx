"use client"

import React, { useCallback } from "react"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { TbPhotoPlus } from 'react-icons/tb'

declare global {
    var cloudinary: any
}

interface ImageUploadProps {
    value: string;
    onChange: (value: string) => void;
}

const uploadPreset = "p9nncrvy" //"pgc9ehd5"

const ImageUpload: React.FC<ImageUploadProps> = ({
    value,
    onChange,
}) => {

    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url)
    }, [onChange])

    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset={uploadPreset}
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => {
                return (
                    <div className="flex flex-col justify-center items-center
                        relative cursor-pointer hover:opacity-70 
                        transition p-20 gap-4 border-dashed border-2  
                        border-neutral-300 text-neutral-600"
                        onClick={() => open?.()}
                    >
                        <TbPhotoPlus
                            size={50}
                        />
                        <div className="font-semibold text-lg">
                            Click to upload
                        </div>
                        {value && (
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={value}
                                    alt="House"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        )}
                    </div>
                )
            }}
        </CldUploadWidget>
    )
}

export default ImageUpload