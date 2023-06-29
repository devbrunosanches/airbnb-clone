"use client"

import React from 'react'
import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form'

import { BiDollar } from 'react-icons/bi'

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className='relative w-full'>
      {formatPrice && (
        <BiDollar size={24}
          className='absolute top-5 left-2'
        />
      )}
      <input id={id} disabled={disabled}
        {...register(id, { required })}
        placeholder=' '
        type={type}
        className={`
          peer w-full p-1 pt-5 font-light bg-white
          border-2 rounded-lg outline-none transition
          disabled:opacity-70 disabled:cursor-not-allowed
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-red-600' : 'border-green-900'}
          ${errors[id] ? 'focus:border-red-600' : 'focus:border-black'}
        `}
      />
      <label className={`
        absolute transform text-md z-10 
        duration-150 top-5 -translate-y-3 
        origin-[0]
        ${formatPrice ? 'left-9' : 'left-4'}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? 'text-red-600' : 'text-black'}
      `}>
        {label}
      </label>
    </div>
  )
}

export default Input