import { SVGProps } from 'react';

const LayoutAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>LayoutAlt</title>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 11h-5m5 4h-5m5-8h-5M9.5 3v18M8.3 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.22 21 18.38 21 16.7 21H8.3c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3.5 18.72 3.5 17.88 3.5 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.78 3 6.62 3 8.3 3Z"
    />
  </svg>
);

export default LayoutAlt;
