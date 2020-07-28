import React from "react";

export default function mask(props) {
  const { color } = props;
  return (
    <svg
      id="mask"
      data-name="mask"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 91.57 108.81"
    >
      <defs>
        <style>
        {`
          .cls-1{fill:${color};}
        `}
        </style>
      </defs>
      <title>mask</title><path d="M67.73,18.33a1.5,1.5,0,0,1-.78-.22l-.7-.43c-5.73-3.56-21-13-33.51-1a1.5,1.5,0,0,1-2.08-2.17c14.24-13.66,31.5-2.93,37.17.6l.68.42a1.5,1.5,0,0,1-.78,2.78Z" transform="translate(0)"/><path class="cls-1" d="M70.36,47.24A17.22,17.22,0,0,0,57,46a1.93,1.93,0,0,0-1.23,2.23h0a1.93,1.93,0,0,0,2.15,1.52c2.35-.33,6.56-.73,9.55,0,2.24.54,3.15,0,3.5-.63A1.39,1.39,0,0,0,70.36,47.24Z" transform="translate(0)"/><rect class="cls-1" x="59.37" y="56.6" width="6.22" height="8.13" rx="3.11" ry="3.11"/><path class="cls-1" d="M21.38,47.24A17.22,17.22,0,0,1,34.76,46,1.93,1.93,0,0,1,36,48.19h0a1.93,1.93,0,0,1-2.15,1.52c-2.35-.33-6.56-.73-9.55,0-2.24.54-3.15,0-3.5-.63A1.39,1.39,0,0,1,21.38,47.24Z" transform="translate(0)"/><rect class="cls-1" x="26.15" y="56.6" width="6.22" height="8.13" rx="3.11" ry="3.11"/><path class="cls-1" d="M67.64,18.33a1.49,1.49,0,0,1-.78-.22l-.7-.43c-5.73-3.56-21-13-33.51-1a1.5,1.5,0,0,1-2.08-2.17c14.24-13.66,31.5-2.93,37.17.6l.68.42a1.5,1.5,0,0,1-.78,2.78Z" transform="translate(0)"/><path class="cls-1" d="M67.94,58.92a1.5,1.5,0,0,1-1-.38,7.1,7.1,0,0,0-7.6-.75,1.5,1.5,0,1,1-1.48-2.61,10.07,10.07,0,0,1,11.08,1.12,1.5,1.5,0,0,1-1,2.62Z" transform="translate(0)"/><path class="cls-1" d="M23.63,58.92a1.5,1.5,0,0,1-1-2.62,10.07,10.07,0,0,1,11.08-1.12,1.5,1.5,0,1,1-1.48,2.62,7.1,7.1,0,0,0-7.6.75A1.49,1.49,0,0,1,23.63,58.92Z" transform="translate(0)"/><path class="cls-1" d="M87.65,60.55a133.24,133.24,0,0,0,0-19.88A3.29,3.29,0,0,1,88.75,38a7.56,7.56,0,0,0,2.63-5.53C91.89,25.24,70.64,2.95,52.54.36,32.42-2,25.66,7.57,23.68,11.77A5.17,5.17,0,0,1,21,14.32C8.2,19.76.35,34.83.34,41.22c0,2.66,1.27,3.6,2,3.92s.65,3.3.65,5.5a46.17,46.17,0,0,0,.79,10C.28,63-.93,67.71.74,73.08a14.18,14.18,0,0,0,7.11,8,10.51,10.51,0,0,0,4.6,1.14,8.13,8.13,0,0,0,1.13-.08,32.88,32.88,0,0,0,4,8.56A13.75,13.75,0,0,0,18.69,93c4.55,7.65,16.52,15.84,27.1,15.84S68.33,100.62,72.89,93A13.76,13.76,0,0,0,74,90.67a32.91,32.91,0,0,0,4-8.56,8.14,8.14,0,0,0,1.13.08,10.51,10.51,0,0,0,4.6-1.14,14.17,14.17,0,0,0,7.11-8C92.51,67.67,91.26,62.89,87.65,60.55ZM9.18,78.36a11.2,11.2,0,0,1-5.57-6.18c-1.36-4.37-.36-8.09,2.56-9.48a7,7,0,0,1,5.16-.36c0,1.29,0,2.85.06,4.6a7.39,7.39,0,0,0-3.53-.76,1.5,1.5,0,0,0,.25,3,4.63,4.63,0,0,1,3.51,1.73,64.53,64.53,0,0,0,1.22,8.28A7.22,7.22,0,0,1,9.18,78.36Zm7.55,3.71c-.3-.88-.56-1.77-.77-2.67a64.2,64.2,0,0,1-1.56-12A71.53,71.53,0,0,0,19.33,74a21.61,21.61,0,0,0-2.6,8.05ZM70.3,91.44c-4,6.8-15.11,14.37-24.52,14.37S25.31,98.23,21.27,91.44C18.63,87,19.13,79.8,22.43,74.67c4-6.24,16.36-9.69,23.35-9.69s19.34,3.45,23.35,9.69c3.3,5.12,3.8,12.33,1.16,16.76Zm5.3-12c-.21.9-.48,1.78-.77,2.66a21.61,21.61,0,0,0-2.6-8,71.63,71.63,0,0,0,4.92-6.59A64.19,64.19,0,0,1,75.6,79.4Zm-5.16-7.93C65,65.28,53,62,45.78,62s-19.22,3.29-24.66,9.49c-1.8-2.2-5.21-6.63-6.77-10.37.41-13.29,6-30.06,17.4-35.78a9.29,9.29,0,0,0,1.83-1.23C40.23,18.44,54,20.46,61.34,26c11.2,8.37,15.54,24.1,15.88,35.13-1.57,3.74-5,8.17-6.77,10.37ZM63.13,23.57c-8.43-6.3-23.69-8.4-31.5-1.77a6.28,6.28,0,0,1-1.23.84C18.34,28.7,12.29,45,11.43,59.26a10.09,10.09,0,0,0-4.81.1A46.09,46.09,0,0,1,6,50.65c0-4,0-7.21-2.46-8.25-.1-.09-.4-.82-.08-2.66,1.19-6.68,8.34-18.27,18.67-22.66a8.17,8.17,0,0,0,4.23-4C28.1,9.43,34,1.24,52.16,3.34,69,5.75,88.77,26.84,88.4,32.26a4.59,4.59,0,0,1-1.69,3.55,6.27,6.27,0,0,0-2,5.1,136.91,136.91,0,0,1,.06,18.41,10.1,10.1,0,0,0-4.62-.05C79.38,47.23,74.6,32.14,63.13,23.57ZM88,72.19a11.21,11.21,0,0,1-5.57,6.17,7.23,7.23,0,0,1-3.66.82A64.83,64.83,0,0,0,80,70.88a4.55,4.55,0,0,1,3.51-1.71,1.5,1.5,0,0,0,.24-3,7.41,7.41,0,0,0-3.53.76c.06-1.75.06-3.3.05-4.6a7,7,0,0,1,5.16.36C88.32,64.1,89.32,67.82,88,72.19Z" transform="translate(0)"/><path class="cls-1" d="M25.84,78.59a1.5,1.5,0,0,1-1-2.62,34.43,34.43,0,0,1,20.94-8,34.43,34.43,0,0,1,20.94,8,1.5,1.5,0,1,1-2,2.25,31.62,31.62,0,0,0-18.95-7.27,31.62,31.62,0,0,0-18.95,7.27A1.49,1.49,0,0,1,25.84,78.59Z" transform="translate(0)"/>
    </svg>
  );
}