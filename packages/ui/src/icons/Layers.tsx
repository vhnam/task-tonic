import type { SVGProps } from 'react';

const Layers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Layers</title>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 12-5 2.5 9.642 4.82c.131.066.197.1.266.112.06.011.123.011.184 0 .069-.013.135-.046.266-.111L22 14.5 17 12M2 9.5l9.642-4.822c.131-.065.197-.098.266-.11a.5.5 0 0 1 .184 0c.069.012.135.045.266.11L22 9.5l-9.642 4.82a1.087 1.087 0 0 1-.266.112.501.501 0 0 1-.184 0c-.069-.013-.135-.046-.266-.111L2 9.5Z"
    />
  </svg>
);

export default Layers;
