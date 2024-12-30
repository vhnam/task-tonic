import type { SVGProps } from 'react';

const Apple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <title>Apple</title>
    <path
      fill="#F8FAFB"
      d="M21.343 17.145a11.961 11.961 0 0 1-1.183 2.126c-.622.887-1.131 1.5-1.524 1.842-.608.56-1.26.846-1.958.862-.5 0-1.105-.143-1.809-.432-.705-.288-1.354-.43-1.947-.43-.622 0-1.289.142-2.003.43-.714.29-1.29.44-1.73.455-.67.029-1.336-.266-2.002-.885-.425-.371-.957-1.007-1.594-1.907-.683-.961-1.245-2.076-1.685-3.347-.472-1.373-.708-2.703-.708-3.99 0-1.474.319-2.746.957-3.811A5.612 5.612 0 0 1 6.16 6.03a5.39 5.39 0 0 1 2.708-.765c.532 0 1.23.165 2.096.488.864.324 1.418.489 1.662.489.181 0 .798-.192 1.842-.576.988-.355 1.822-.503 2.505-.445 1.851.15 3.242.88 4.166 2.194-1.655 1.003-2.474 2.408-2.457 4.21.015 1.404.524 2.572 1.525 3.5.453.43.96.763 1.523.999a16.41 16.41 0 0 1-.388 1.02ZM17.098.44c0 1.1-.402 2.128-1.203 3.079-.967 1.13-2.137 1.783-3.405 1.68a3.417 3.417 0 0 1-.026-.417c0-1.056.46-2.186 1.277-3.11.408-.469.926-.858 1.555-1.168.627-.306 1.22-.475 1.779-.504.016.147.023.294.023.44Z"
    />
  </svg>
);

export default Apple;