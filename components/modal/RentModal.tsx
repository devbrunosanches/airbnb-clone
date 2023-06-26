"use client"

import React, { useMemo, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import Modal from './Modal'
import { useRentModal } from '@/hooks'
import { CategoryInput, Heading } from '@/components'
import { categories } from '../Categories'

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
}

const RentModal = () => {

    const rentModal = useRentModal()

    const [step, setStep] = useState(STEPS.CATEGORY)

    const {
        register, handleSubmit, setValue, watch, formState: {
            errors,
        }, reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: '',
            price: 1,
            title: '',
            description: '',
        }
    })

    const category = watch('category')

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        })
    }

    const onBack = () => {
        setStep((value) => value - 1)
    }

    const onNext = () => {
        setStep((value) => +1)
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return 'Create'
        }
        return 'Next'
    }, [step])

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined
        }
        return 'Back'
    }, [step])

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title='Which of these best describes your place ?'
                subtitle='Pick a category'
            />
            <div className="grid grid-cols-1 md:grid-cols-2
                gap-3 overflow-y-auto max-h-[50vh]"
            >
                {categories.map((item) => (
                    <div className="col-sapn-1" key={item.label}>
                        <CategoryInput
                            label={item.label}
                            icon={item.icon}
                            selected={category === item.label}
                            onClick={(category) => setCustomValue('category', category)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <Modal
            title='Airbnb your home'
            actionLabel={actionLabel}
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={rentModal.onClose}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            body={bodyContent}
        />
    )
}

export default RentModal