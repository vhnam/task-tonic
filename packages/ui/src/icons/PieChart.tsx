import type { SVGProps } from 'react';

const PieChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Pie Chart</title>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.2 14c.277 0 .416 0 .528.061a.53.53 0 0 1 .22.243c.05.118.037.244.012.494A8 8 0 1 1 9.201 6.04c.251-.026.376-.038.494.012a.53.53 0 0 1 .243.22c.062.112.062.25.062.528v6.4c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218c.107.055.247.055.527.055h6.4ZM14 2.8c0-.277 0-.416.062-.528a.53.53 0 0 1 .243-.22c.117-.05.243-.038.494-.012A8 8 0 0 1 21.96 9.2c.025.25.038.376-.012.494a.53.53 0 0 1-.22.243c-.113.062-.251.062-.528.062h-6.4c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C14 9.62 14 9.48 14 9.2V2.8Z"
    />
  </svg>
);

export default PieChart;
