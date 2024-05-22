interface FormInputProps {
  type: string
  placeholder: string
  required: boolean
  errors: string[]
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors
}: FormInputProps) {
  return (
    <div className='flex flex-col gap-2'>
      <input
        className='text-sm p-1 pl-3 font-sans bg-transparent rounded-xl h-auto focus:outline-none ring-1 focus:ring-2 transition ring-neutral-200 focus:ring-cyan-700 border-none placeholder:text-neutral-400'
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, index) => (
        <span key={index} className='text-red-500 font-medium'>
          {error}
        </span>
      ))}
    </div>
  )
}
