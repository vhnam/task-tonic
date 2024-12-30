import Button from '@repo/ui/components/button';
import Link from 'next/link';
import Checkbox from '@repo/ui/components/checkbox';
import Divider from '@repo/ui/components/divider';
import Logo from '@repo/ui/components/logo';
import SocialButton from '@repo/ui/components/socialButton';
import TextField from '@repo/ui/components/textField';
import Typography from '@repo/ui/components/typography';

const LoginPage = () => {
  return (
    <div className="flex h-screen bg-[url(/assets/images/bg-auth.jpg)] bg-cover">
      <div className="flex flex-col justify-between p-[3.125rem]">
        <Logo variant="white" size="large" />
        <div>
          <Typography variant="h3" className="text-additional-white mb-4">
            Supercharge your productivity, one task at a time.
          </Typography>
          <Typography variant="md" className="text-additional-white">
            Ready to take control of your to-do list? TaskTonic helps you stay
            organized, focused, and ahead of your goals. Let&apos;s get started!
          </Typography>
        </div>
      </div>
      <div className="bg-base-background my-5 mr-5 flex items-center rounded-[1.25rem] px-[6.25rem]">
        <div className="flex w-[34.375rem] flex-col gap-6">
          <div className="flex flex-col gap-3 text-center">
            <Typography variant="h3">HI, welcome</Typography>
            <Typography variant="md" className="text-greyscale-500 font-medium">
              Please login to your account
            </Typography>
          </div>
          <div>
            <div className="mb-4 flex flex-col gap-3">
              <TextField label="Email" placeholder="Your email" />
              <TextField
                label="Password"
                placeholder="Your password"
                type="password"
              />
              <Button className="w-full" variant="primary" size="md">
                Login
              </Button>
            </div>
            <div className="flex justify-between">
              <Checkbox label="Remember me" />
              <Typography
                className="text-greyscale-200 font-medium"
                variant="sm"
              >
                Forgot Password?
              </Typography>
            </div>
          </div>
          <Divider>
            <Typography
              variant="xs"
              className="text-greyscale-400 whitespace-nowrap"
            >
              Or Sign in with
            </Typography>
          </Divider>
          <div className="flex items-center justify-center gap-3">
            <SocialButton variant="google">Sign in with Google</SocialButton>
            <SocialButton variant="apple">Sign in with Apple</SocialButton>
          </div>
          <div className="flex items-center justify-center gap-1 [&_span]:inline-block">
            <Typography variant="sm" className="font-medium">
              Don&apos;t have an account?
            </Typography>
            <Link href="/auth/register">
              <Typography
                variant="sm"
                className="text-primary-300 hover:text-primary-200 font-semibold"
              >
                Sign Up
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
