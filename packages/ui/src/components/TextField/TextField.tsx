import { type InputProps, Input as MuiInput } from '@mui/base/Input';
import { Typography } from '../Typography';

export type TextFieldProps = InputProps & {
  label: string;
};

const TextField = ({ className, label, ...props }: TextFieldProps) => {
  return (
    <div className="w-full">
      <Typography
        variant="sm"
        className="text-greyscale-900 mb-[0.375rem] font-medium"
      >
        {label}
      </Typography>
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
