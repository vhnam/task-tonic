import { SVGProps } from 'react';

export interface LogoLargeProps extends SVGProps<SVGSVGElement> {
  variant: 'color' | 'white';
}

const LogoLarge = ({ variant, ...props }: LogoLargeProps) => {
  const fillColor = 'color' === variant ? '#1678F2' : '#fff';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={207}
      height={49}
      fill="none"
      {...props}
    >
      <path
        stroke={fillColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.333}
        d="M21.667 7.833 6.823 25.646c-.582.698-.872 1.047-.877 1.341-.004.257.11.5.31.661.229.185.683.185 1.59.185H20l-1.666 13.334 14.844-17.813c.581-.698.872-1.047.876-1.341a.833.833 0 0 0-.31-.661c-.228-.185-.682-.185-1.59-.185H20l1.667-13.334Z"
      />
      <path
        fill={fillColor}
        d="M58.982 38V15.626H50.36V12.08h21.006v3.546h-8.622V38h-3.762Zm16.423.54c-1.44 0-2.646-.264-3.618-.792-.972-.54-1.71-1.248-2.214-2.124a5.917 5.917 0 0 1-.738-2.916c0-.984.174-1.848.522-2.592a4.995 4.995 0 0 1 1.548-1.89c.684-.528 1.524-.954 2.52-1.278a27.632 27.632 0 0 1 2.934-.666 99.722 99.722 0 0 1 3.438-.54c1.212-.168 2.412-.336 3.6-.504l-1.368.756c.024-1.524-.3-2.652-.972-3.384-.66-.744-1.8-1.116-3.42-1.116-1.02 0-1.956.24-2.808.72-.852.468-1.446 1.248-1.782 2.34l-3.51-1.08c.48-1.668 1.392-2.994 2.736-3.978 1.356-.984 3.156-1.476 5.4-1.476 1.74 0 3.252.3 4.536.9 1.296.588 2.244 1.524 2.844 2.808.312.636.504 1.308.576 2.016.072.708.108 1.47.108 2.286V38h-3.33v-4.446l.648.576c-.804 1.488-1.83 2.598-3.078 3.33-1.236.72-2.76 1.08-4.572 1.08Zm.666-3.078c1.068 0 1.986-.186 2.754-.558.768-.384 1.386-.87 1.854-1.458.468-.588.774-1.2.918-1.836a6.449 6.449 0 0 0 .342-1.944c.036-.72.054-1.296.054-1.728l1.224.45c-1.188.18-2.268.342-3.24.486a82.41 82.41 0 0 0-2.646.432c-.78.132-1.476.294-2.088.486-.516.18-.978.396-1.386.648a3.175 3.175 0 0 0-.954.918c-.228.36-.342.798-.342 1.314 0 .504.126.972.378 1.404.252.42.636.756 1.152 1.008.516.252 1.176.378 1.98.378Zm19.974 3.06c-2.364 0-4.29-.522-5.778-1.566-1.488-1.044-2.4-2.514-2.736-4.41l3.852-.594a3.896 3.896 0 0 0 1.656 2.394c.876.576 1.962.864 3.258.864 1.176 0 2.094-.24 2.754-.72.672-.48 1.008-1.14 1.008-1.98 0-.492-.12-.888-.36-1.188-.228-.312-.714-.606-1.458-.882s-1.878-.618-3.402-1.026c-1.668-.432-2.994-.894-3.978-1.386-.972-.504-1.668-1.086-2.088-1.746-.408-.672-.612-1.482-.612-2.43 0-1.176.312-2.202.936-3.078.624-.876 1.5-1.554 2.628-2.034 1.14-.48 2.472-.72 3.996-.72 1.488 0 2.814.234 3.978.702 1.164.468 2.106 1.134 2.826 1.998.72.852 1.152 1.854 1.296 3.006l-3.852.702c-.132-.936-.57-1.674-1.314-2.214-.744-.54-1.71-.834-2.898-.882-1.14-.048-2.064.144-2.772.576-.708.42-1.062 1.002-1.062 1.746 0 .432.132.798.396 1.098.276.3.804.588 1.584.864s1.932.606 3.456.99c1.632.42 2.928.888 3.888 1.404.96.504 1.644 1.11 2.052 1.818.42.696.63 1.542.63 2.538 0 1.92-.702 3.426-2.106 4.518-1.392 1.092-3.318 1.638-5.778 1.638ZM106.094 38l.018-25.92h3.816v15.84l7.632-9.36h4.788l-8.064 9.72 8.892 9.72h-5.112l-8.136-9.36V38h-3.834Zm23.559 0V15.626h-8.622V12.08h21.006v3.546h-8.622V38h-3.762Zm19.024.54c-1.944 0-3.63-.438-5.058-1.314-1.428-.876-2.532-2.082-3.312-3.618-.768-1.548-1.152-3.33-1.152-5.346 0-2.028.396-3.81 1.188-5.346.792-1.548 1.902-2.748 3.33-3.6 1.428-.864 3.096-1.296 5.004-1.296 1.944 0 3.63.438 5.058 1.314 1.428.876 2.532 2.082 3.312 3.618.78 1.536 1.17 3.306 1.17 5.31 0 2.028-.396 3.816-1.188 5.364-.78 1.536-1.884 2.742-3.312 3.618-1.428.864-3.108 1.296-5.04 1.296Zm0-3.546c1.86 0 3.246-.624 4.158-1.872.924-1.26 1.386-2.88 1.386-4.86 0-2.028-.468-3.648-1.404-4.86-.924-1.224-2.304-1.836-4.14-1.836-1.26 0-2.298.288-3.114.864-.816.564-1.422 1.35-1.818 2.358-.396.996-.594 2.154-.594 3.474 0 2.04.468 3.672 1.404 4.896.936 1.224 2.31 1.836 4.122 1.836ZM174.016 38v-9.558c0-.756-.066-1.53-.198-2.322a6.96 6.96 0 0 0-.72-2.232 4.224 4.224 0 0 0-1.494-1.656c-.636-.42-1.47-.63-2.502-.63-.672 0-1.308.114-1.908.342-.6.216-1.128.57-1.584 1.062-.444.492-.798 1.14-1.062 1.944-.252.804-.378 1.782-.378 2.934l-2.34-.882c0-1.764.33-3.318.99-4.662.66-1.356 1.608-2.412 2.844-3.168 1.236-.756 2.73-1.134 4.482-1.134 1.344 0 2.472.216 3.384.648.912.432 1.65 1.002 2.214 1.71a7.653 7.653 0 0 1 1.314 2.286c.3.828.504 1.638.612 2.43.108.792.162 1.488.162 2.088V38h-3.816Zm-13.662 0V18.56h3.366v5.616h.45V38h-3.816Zm20.727-22.626V11.72h3.762v3.654h-3.762Zm0 22.626V18.56h3.762V38h-3.762Zm15.683.54c-1.992 0-3.684-.444-5.076-1.332-1.392-.888-2.46-2.106-3.204-3.654-.732-1.548-1.104-3.306-1.116-5.274.012-2.004.396-3.774 1.152-5.31.756-1.548 1.836-2.76 3.24-3.636 1.404-.876 3.09-1.314 5.058-1.314 2.124 0 3.936.528 5.436 1.584 1.512 1.056 2.508 2.502 2.988 4.338l-3.744 1.08c-.372-1.092-.984-1.938-1.836-2.538-.84-.612-1.806-.918-2.898-.918-1.236 0-2.25.294-3.042.882-.792.576-1.38 1.368-1.764 2.376-.384 1.008-.582 2.16-.594 3.456.012 2.004.468 3.624 1.368 4.86.912 1.236 2.256 1.854 4.032 1.854 1.212 0 2.19-.276 2.934-.828.756-.564 1.332-1.368 1.728-2.412l3.816.9c-.636 1.896-1.686 3.354-3.15 4.374-1.464 1.008-3.24 1.512-5.328 1.512Z"
      />
    </svg>
  );
};

export default LogoLarge;
