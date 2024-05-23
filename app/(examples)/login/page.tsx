"use client";
import FormButton from '@/app/components/form-button'
import FormInput from '@/app/components/form-input'
import { handleLogin } from './actions'
import { useFormState } from 'react-dom';

export default function Login() {

  const [state, trigger] = useFormState(handleLogin, null);

  return (
    <div className='flex bg-gray-200 h-screen items-center justify-center p-5'>
      <div className='flex items-center justify-center p-5 rounded-2xl w-full max-w-lg bg-white'>
        <form action={trigger} className='flex flex-col gap-2 w-1/2'>
          <div className='text-xl font-bold text-center mb-5 font-sans'>Hello</div>
          <FormInput name='email' type='email' placeholder='Email' required errors={[]} />
          <FormInput name='username' type='username' placeholder='Username' required errors={[]} />
          <FormInput
            name='password'
            type='password'
            placeholder='Password'
            required
            errors={state?.errors ?? []}
          />
          <FormButton text='Login' />
          {state?.ok ?
            <div className='w-full bg-emerald-300 h-12 ring-1 ring-emerald-500 rounded-md content-center text-center font-mono'>
              Welcome back!
            </div>
            : null}
        </form>
      </div>
    </div>
  )
}
