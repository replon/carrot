import FormButton from '@/app/components/form-button'
import FormInput from '@/app/components/form-input'

export default function Login() {
  return (
    <div className='flex bg-gray-200 h-screen items-center justify-center p-5'>
      <div className='flex items-center justify-center p-5 rounded-2xl w-full max-w-lg bg-white'>
        <form className='flex flex-col gap-2 w-1/2'>
          <div className='text-xl font-bold text-center mb-5 font-sans'>Hello</div>
          <FormInput type='email' placeholder='Email' required errors={[]} />
          <FormInput type='text' placeholder='Username' required errors={[]} />
          <FormInput
            type='password'
            placeholder='Password'
            required
            errors={[]}
          />
          <FormButton text='Login' loading={false} />
        </form>
      </div>
    </div>
  )
}
