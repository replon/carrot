interface FormInputProps {
  name: string
  type: string
  placeholder: string
  required: boolean
  errors: any
}

const iconPath: Record<string, JSX.Element> = {
  username: <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>,
  email: <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>,
  password: <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"></path>
}

export default function FormInput({
  name,
  type,
  placeholder,
  required,
  errors = []
}: FormInputProps) {
  return (
    <div className='flex flex-col gap-2'>
      <div className="flex w-full">
        <input
          className='w-full text-sm p-1 pl-7 font-sans bg-transparent rounded-xl h-auto focus:outline-none ring-1 focus:ring-2 transition ring-neutral-200 focus:ring-cyan-700 border-none placeholder:text-neutral-400'
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
        />
        <svg className="absolute ml-1 mt-1 size-5 stroke-neutral-300 stroke-2 fill-neutral-200" data-slot="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {iconPath[type]}
        </svg>

      </div>
      {errors.map((error: any, index: number) => (
        <span key={index} className='text-red-500 font-medium text-xs'>
          {error}
        </span>
      ))}
    </div>
  )
}