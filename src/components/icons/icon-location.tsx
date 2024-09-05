// icon:location-outline | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from 'react';

function IconLocationOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M304 192 A48 48 0 0 1 256 240 A48 48 0 0 1 208 192 A48 48 0 0 1 304 192 z"
      />
    </svg>
  );
}

export default IconLocationOutline;
