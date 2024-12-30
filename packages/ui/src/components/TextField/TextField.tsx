import { Input as MuiInput, type InputProps } from '@mui/base/Input';
import { Typography } from '@/components/Typography';

export type TextFieldProps = InputProps & {
  label?: string;
};

const TextField = ({ label, ...props }: TextFieldProps) => {
  return (
    <div className="w-full">
      {label && (
        <Typography
          variant="sm"
          className="text-greyscale-900 mb-1.5 font-medium"
        >
          {label}
        </Typography>
      )}
      <MuiInput
        slotProps={{
          input: {
            className:
              'w-full py-[0.625rem] px-[0.75rem] rounded-[6.25rem] text-greyscale-900 bg-greyscale-0 border-greyscale-100 border-[1px] border-solid',
          },
        }}
        {...props}
      />
    </div>
  );
};

export default TextField;
