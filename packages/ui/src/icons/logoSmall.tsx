import { SVGProps } from 'react';

export interface LogoSmallProps extends SVGProps<SVGSVGElement> {
  variant: 'color' | 'white';
}

const LogoSmall = ({ variant, ...props }: LogoSmallProps) => {
  const fillColor = 'color' === variant ? '#1678F2' : '#fff';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={121}
      height={27}
      fill="none"
      {...props}
    >
      <path
        stroke={fillColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 3.5 4.094 14.188c-.35.418-.524.628-.526.804a.5.5 0 0 0 .185.397c.138.111.41.111.955.111H12l-1 8 8.907-10.688c.349-.418.523-.628.526-.804a.5.5 0 0 0-.186-.397c-.138-.111-.41-.111-.955-.111H12l1-8Z"
      />
      <path
        fill={fillColor}
        d="M38.99 21V8.57H34.2V6.6h11.67v1.97h-4.79V21h-2.09Zm9.124.3c-.8 0-1.47-.147-2.01-.44-.54-.3-.95-.693-1.23-1.18a3.286 3.286 0 0 1-.41-1.62c0-.547.097-1.027.29-1.44.193-.413.48-.763.86-1.05.38-.293.847-.53 1.4-.71.48-.14 1.023-.263 1.63-.37a55.201 55.201 0 0 1 1.91-.3c.673-.093 1.34-.187 2-.28l-.76.42c.013-.847-.167-1.473-.54-1.88-.367-.413-1-.62-1.9-.62-.567 0-1.087.133-1.56.4-.473.26-.803.693-.99 1.3l-1.95-.6c.267-.927.773-1.663 1.52-2.21.753-.547 1.753-.82 3-.82.967 0 1.807.167 2.52.5.72.327 1.247.847 1.58 1.56.173.353.28.727.32 1.12.04.393.06.817.06 1.27V21h-1.85v-2.47l.36.32c-.447.827-1.017 1.443-1.71 1.85-.687.4-1.533.6-2.54.6Zm.37-1.71c.593 0 1.103-.103 1.53-.31.427-.213.77-.483 1.03-.81.26-.327.43-.667.51-1.02.113-.32.177-.68.19-1.08.02-.4.03-.72.03-.96l.68.25-1.8.27c-.54.08-1.03.16-1.47.24a8.79 8.79 0 0 0-1.16.27c-.287.1-.543.22-.77.36-.22.14-.397.31-.53.51-.127.2-.19.443-.19.73 0 .28.07.54.21.78.14.233.353.42.64.56.287.14.653.21 1.1.21Zm11.097 1.7c-1.314 0-2.384-.29-3.21-.87-.827-.58-1.334-1.397-1.52-2.45l2.14-.33c.133.56.44 1.003.92 1.33.486.32 1.09.48 1.81.48.653 0 1.163-.133 1.53-.4.373-.267.56-.633.56-1.1 0-.273-.067-.493-.2-.66-.127-.173-.397-.337-.81-.49-.414-.153-1.044-.343-1.89-.57-.927-.24-1.664-.497-2.21-.77-.54-.28-.927-.603-1.16-.97-.227-.373-.34-.823-.34-1.35 0-.653.173-1.223.52-1.71.346-.487.833-.863 1.46-1.13.633-.267 1.373-.4 2.22-.4.826 0 1.563.13 2.21.39.646.26 1.17.63 1.57 1.11.4.473.64 1.03.72 1.67l-2.14.39a1.761 1.761 0 0 0-.73-1.23c-.414-.3-.95-.463-1.61-.49-.634-.027-1.147.08-1.54.32-.394.233-.59.557-.59.97 0 .24.073.443.22.61.153.167.446.327.88.48.433.153 1.073.337 1.92.55.906.233 1.626.493 2.16.78.533.28.913.617 1.14 1.01.233.387.35.857.35 1.41 0 1.067-.39 1.903-1.17 2.51-.774.607-1.844.91-3.21.91Zm5.582-.29.01-14.4h2.12v8.8l4.24-5.2h2.66l-4.48 5.4 4.94 5.4h-2.84l-4.52-5.2V21h-2.13Zm13.089 0V8.57h-4.79V6.6h11.67v1.97h-4.79V21h-2.09Zm10.569.3c-1.08 0-2.017-.243-2.81-.73a4.92 4.92 0 0 1-1.84-2.01c-.427-.86-.64-1.85-.64-2.97 0-1.127.22-2.117.66-2.97a4.837 4.837 0 0 1 1.85-2c.793-.48 1.72-.72 2.78-.72 1.08 0 2.016.243 2.81.73a4.92 4.92 0 0 1 1.84 2.01c.433.853.65 1.837.65 2.95 0 1.127-.22 2.12-.66 2.98a4.92 4.92 0 0 1-1.84 2.01c-.794.48-1.727.72-2.8.72Zm0-1.97c1.033 0 1.803-.347 2.31-1.04.513-.7.77-1.6.77-2.7 0-1.127-.26-2.027-.78-2.7-.514-.68-1.28-1.02-2.3-1.02-.7 0-1.277.16-1.73.48-.454.313-.79.75-1.01 1.31-.22.553-.33 1.197-.33 1.93 0 1.133.26 2.04.78 2.72.52.68 1.283 1.02 2.29 1.02ZM102.897 21v-5.31c0-.42-.037-.85-.11-1.29-.067-.447-.2-.86-.4-1.24a2.344 2.344 0 0 0-.83-.92c-.353-.233-.817-.35-1.39-.35-.373 0-.727.063-1.06.19-.333.12-.627.317-.88.59-.247.273-.443.633-.59 1.08-.14.447-.21.99-.21 1.63l-1.3-.49c0-.98.183-1.843.55-2.59a4.132 4.132 0 0 1 1.58-1.76c.687-.42 1.517-.63 2.49-.63.747 0 1.373.12 1.88.36.507.24.917.557 1.23.95.32.387.563.81.73 1.27.167.46.28.91.34 1.35.06.44.09.827.09 1.16v6h-2.12Zm-7.59 0V10.2h1.87v3.12h.25V21h-2.12Zm11.515-12.57V6.4h2.09v2.03h-2.09Zm0 12.57V10.2h2.09V21h-2.09Zm8.713.3c-1.107 0-2.047-.247-2.82-.74a4.83 4.83 0 0 1-1.78-2.03c-.407-.86-.614-1.837-.62-2.93.006-1.113.22-2.097.64-2.95a4.815 4.815 0 0 1 1.8-2.02c.78-.487 1.716-.73 2.81-.73 1.18 0 2.186.293 3.02.88.84.587 1.393 1.39 1.66 2.41l-2.08.6c-.207-.607-.547-1.077-1.02-1.41a2.665 2.665 0 0 0-1.61-.51c-.687 0-1.25.163-1.69.49-.44.32-.767.76-.98 1.32-.214.56-.324 1.2-.33 1.92.006 1.113.26 2.013.76 2.7.506.687 1.253 1.03 2.24 1.03.673 0 1.216-.153 1.63-.46.42-.313.74-.76.96-1.34l2.12.5c-.354 1.053-.937 1.863-1.75 2.43-.814.56-1.8.84-2.96.84Z"
      />
    </svg>
  );
};

export default LogoSmall;
