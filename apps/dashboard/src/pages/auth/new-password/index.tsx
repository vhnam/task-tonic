import Button from '@repo/ui/components/button';
import Logo from '@repo/ui/components/logo';
import TextField from '@repo/ui/components/textField';
import Typography from '@repo/ui/components/typography';

const LoginPage = () => {
  return (
    <div className="flex h-screen bg-[url(/assets/images/bg-auth.jpg)] bg-cover">
      <div className="flex flex-col justify-between p-[3.125rem]">
        <Logo variant="white" size="large" />
        <div>
          <Typography variant="h3" className="text-additional-white mb-4">
            Visualize your productivity.
          </Typography>
          <Typography variant="md" className="text-additional-white">
            See how far you’ve come. TaskTonic’s analytics provide insights into
            your task completion rates and productivity trends
          </Typography>
        </div>
      </div>
      <div className="bg-base-background my-5 mr-5 flex items-center rounded-[1.25rem] px-[6.25rem]">
        <div className="flex w-[34.375rem] flex-col gap-6">
          <div className="flex flex-col gap-3 text-center">
            <Typography variant="h3">Set New Password</Typography>
            <Typography variant="md" className="text-greyscale-500 font-medium">
              Must be at least 8 characters
            </Typography>
          </div>
          <div className="mb-4 flex flex-col gap-3">
            <TextField
              label="Password"
              placeholder="Your password"
              type="password"
            />
            <TextField
              label="Password"
              placeholder="Input your password to confirm"
              type="password"
            />
          </div>
          <Button className="w-full" variant="primary" size="md">
            Reset Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;