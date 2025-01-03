import {
  Button,
  Divider,
  Logo,
  SocialButton,
  TextField,
  Typography,
} from '@repo/ui/components';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div className='flex h-screen bg-[url(/assets/images/bg-auth.jpg)] bg-cover'>
      <div className='flex flex-col justify-between p-[3.125rem]'>
        <Logo variant='white' size='large' />
        <div>
          <Typography variant='h3' className='mb-4 text-additional-white'>
            Organize, prioritize, and track your tasks effortlessly.
          </Typography>
          <Typography variant='md' className='text-additional-white'>
            Whether it&apos;s personal or professional, TaskTonic keeps your
            tasks neatly organized. Sort by due dates, priorities, or categories
            to keep everything in check
          </Typography>
        </div>
      </div>
      <div className='my-5 mr-5 flex items-center rounded-[1.25rem] bg-base-background px-[6.25rem]'>
        <div className='flex w-[34.375rem] flex-col gap-6'>
          <div className='flex flex-col gap-3 text-center'>
            <Typography variant='h3'>Create Your Account</Typography>
            <Typography variant='md' className='font-medium text-greyscale-500'>
              Please input to your account
            </Typography>
          </div>
          <div>
            <div className='mb-4 flex flex-col gap-3'>
              <div className='flex items-center gap-3'>
                <TextField
                  label='First Name'
                  placeholder='Input your first name'
                />
                <TextField
                  label='Last Name'
                  placeholder='Input your last name'
                />
              </div>
              <TextField label='Email' placeholder='Your email' />
              <TextField
                label='Password'
                placeholder='Your password'
                type='password'
              />
              <Button className='w-full' variant='primary' size='md'>
                Register
              </Button>
            </div>
          </div>
          <Divider>
            <Typography
              variant='xs'
              className='whitespace-nowrap text-greyscale-400'
            >
              Or Sign in with
            </Typography>
          </Divider>
          <div className='flex items-center justify-center gap-3'>
            <SocialButton variant='google'>Sign in with Google</SocialButton>
            <SocialButton variant='apple'>Sign in with Apple</SocialButton>
          </div>
          <div className='flex items-center justify-center gap-1 [&_span]:inline-block'>
            <Typography variant='sm' className='font-medium'>
              Already have an account?
            </Typography>
            <Link href='/auth/login'>
              <Typography
                variant='sm'
                className='font-semibold text-primary-300 hover:text-primary-200'
              >
                Sign In
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
