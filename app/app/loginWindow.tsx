'use client';
import { useState } from 'react';

interface FormData {
  username: string;
  name: string;
}

export default function LoginWindow({
  setUpProfile,
}: {
  setUpProfile: (form: FormData) => Promise<void>;
}) {
  // TODO #1: Add a state variable to store the current error message
  const [error, setError] = useState<string>('');

  const onSubmit = async (form: FormData) => {
    try {
      // TODO #3: Set the error state to an empty string
      setError('');

      // TODO #4: Set up a try catch block to call the setUpProfile() function and set the error state
      // if an error is thrown
      await setUpProfile(form);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData: FormData = {
          username: e.currentTarget.username.value,
          name: e.currentTarget.name.value,
        };
        onSubmit(formData);
      }}
    >
      <div className='flex flex-col space-y-3'>
        <p className='text-xs font-bold uppercase text-neutral-100'>
          Create Account
        </p>
        <input
          id='username'
          type='text'
          name='username'
          className='rounded border border-neutral-200 bg-neutral-300 px-3 py-2 text-sm'
          placeholder='Username'
          required
        />
        <input
          id='name'
          type='text'
          name='name'
          className='rounded border border-neutral-200 bg-neutral-300 px-3 py-2 text-sm'
          placeholder='Name'
          required
        />
        <div className='w-full'>
          <button
            type='submit'
            className='flex w-full flex-row items-center justify-center space-x-2 rounded bg-blue-500 py-2.5 text-sm font-medium hover:bg-blue-400'
          >
            Create Account
          </button>
          <p className='text-red-500'>
            {/* TODO #2: Display the error message if it is not an empty string using the error state variable */}
            {error && error}
          </p>
        </div>
      </div>
    </form>
  );
}
