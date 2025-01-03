import type { SVGProps } from 'react';

const Google = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={24}
    fill='none'
    {...props}
  >
    <title>Google</title>
    <g clipPath='url(#a)'>
      <path
        fill='#4285F4'
        d='M24.266 12.276c0-.816-.066-1.636-.207-2.438H12.74v4.62h6.482a5.555 5.555 0 0 1-2.399 3.647v2.999h3.867c2.271-2.09 3.576-5.177 3.576-8.828Z'
      />
      <path
        fill='#34A853'
        d='M12.74 24.001c3.237 0 5.966-1.062 7.955-2.897l-3.867-2.998c-1.076.732-2.465 1.146-4.083 1.146-3.131 0-5.786-2.112-6.738-4.951h-3.99v3.09a12.002 12.002 0 0 0 10.723 6.61Z'
      />
      <path
        fill='#FBBC04'
        d='M6.003 14.3a7.188 7.188 0 0 1 0-4.594v-3.09H2.017a12.01 12.01 0 0 0 0 10.776L6.003 14.3Z'
      />
      <path
        fill='#EA4335'
        d='M12.74 4.75a6.52 6.52 0 0 1 4.603 1.799l3.427-3.426A11.533 11.533 0 0 0 12.74 0 11.998 11.998 0 0 0 2.017 6.615l3.986 3.09C6.95 6.863 9.609 4.75 12.74 4.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M.5 0h24v24H.5z' />
      </clipPath>
    </defs>
  </svg>
);

export default Google;
