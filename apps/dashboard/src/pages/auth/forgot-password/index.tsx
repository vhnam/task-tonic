import { Button, Logo, TextField, Typography } from '@repo/ui/components';

const ForgotPasswordPage = () => {
  return (
    <div className="flex h-screen bg-[url(/assets/images/bg-auth.jpg)] bg-cover">
      <div className="flex flex-col justify-between p-[3.125rem]">
        <Logo variant="white" size="large" />
        <div>
          <Typography variant="h3" className="text-additional-white mb-4">
            Boost your productivity with Focus Mode.
          </Typography>
          <Typography variant="md" className="text-additional-white">
            Need to block out distractions? Activate Focus Mode and let
            TaskTonic guide you through uninterrupted work sessions
          </Typography>
        </div>
      </div>
      <div className="bg-base-background my-5 mr-5 flex items-center rounded-[1.25rem] px-[6.25rem]">
        <div className="w-[34.375rem]">
          <div className="mb-6 flex flex-col gap-3 text-center">
            <Typography variant="h3">Forgot Password?</Typography>
            <Typography variant="md" className="text-greyscale-500 font-medium">
              No worries, we&apos;ll send you reset instructions
            </Typography>
          </div>
          <div className="mb-6">
            <TextField label="Email" placeholder="Your email" />
          </div>
          <div className="mb-4">
            <Typography variant="sm" className="text-greyscale-500 font-medium">
              By creating an account, you agree to our Privacy Policy
            </Typography>
          </div>
          <Button className="w-full" variant="primary" size="md">
            Reset Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
