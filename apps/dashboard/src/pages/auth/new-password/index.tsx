import { Button, Logo, TextField, Typography } from '@repo/ui/components';

const NewPasswordPage = () => {
  return (
    <div className='flex h-screen bg-[url(/assets/images/bg-auth.jpg)] bg-cover'>
      <div className='flex flex-col justify-between p-[3.125rem]'>
        <Logo variant='white' size='large' />
        <div>
          <Typography variant='h3' className='mb-4 text-additional-white'>
            Visualize your productivity.
          </Typography>
          <Typography variant='md' className='text-additional-white'>
            See how far you&apos;ve come. TaskTonic&apos;s analytics provide
            insights into your task completion rates and productivity trends
          </Typography>
        </div>
      </div>
      <div className='my-5 mr-5 flex items-center rounded-[1.25rem] bg-base-background px-[6.25rem]'>
        <div className='flex w-[34.375rem] flex-col gap-6'>
          <div className='flex flex-col gap-3 text-center'>
            <Typography variant='h3'>Set New Password</Typography>
            <Typography variant='md' className='font-medium text-greyscale-500'>
              Must be at least 8 characters
            </Typography>
          </div>
          <div className='mb-4 flex flex-col gap-3'>
            <TextField
              label='Password'
              placeholder='Your password'
              type='password'
            />
            <TextField
              label='Password'
              placeholder='Input your password to confirm'
              type='password'
            />
          </div>
          <Button className='w-full' variant='primary' size='md'>
            Reset Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;
