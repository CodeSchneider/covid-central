import React from "react";

export default function crc(props) {
  const { color } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 84.01 78"
    >
      <defs>
        <style>
        {`
          .cls-1{fill:${color};}
        `}
        </style>
      </defs>
      <title>crc</title><path class="cls-1" d="M84,70.5A7.55,7.55,0,0,1,76.5,78H3a3,3,0,0,1-.4-6l63-9H76.5A7.55,7.55,0,0,1,84,70.5Z" transform="translate(0.01)"/><path class="cls-1" d="M57.9,41.1a2.9,2.9,0,0,1,0-4.2l9-9A2.88,2.88,0,0,1,69,27H81a3,3,0,0,1,0,6H78v.3L75.6,57h-6L72,33H70.3l-8.1,8.1A3,3,0,0,1,57.9,41.1Z" transform="translate(0.01)"/><path class="cls-1" d="M19.4,48,24,52a10.47,10.47,0,0,1-.8,1.1l-6,6a2.9,2.9,0,0,1-4.2,0,3,3,0,0,1,0-4.2l5.8-5.8Z" transform="translate(0.01)"/><path class="cls-1" d="M9.2,25.9c4-9.6,16.8-14.6,31.1-7.5a2.54,2.54,0,0,1,1.2,1.1c1.2,2,3.2,4.4,5.6,4.6A5.86,5.86,0,0,0,51.7,22a3,3,0,0,1,4.4,4,11.71,11.71,0,0,1-9.6,4c-2.3-.2-5.6-1.4-8.8-5.5l-5,12.6A2.79,2.79,0,0,1,30,39H27.3L35,45.7A3.26,3.26,0,0,1,36,48V60a3,3,0,0,1-6,0V49.4l-9.7-8.5a6.44,6.44,0,0,1-1.8-7.5l5-11.9c-4.5,1-7.4,3.6-8.7,6.7a2.94,2.94,0,0,1-3.9,1.6A3,3,0,0,1,9.2,25.9Z" transform="translate(0.01)"/><path class="cls-1" d="M33,7.5a7.5,7.5,0,0,1,15,0,7.5,7.5,0,0,1-15,0Z" transform="translate(0.01)"/>
    </svg>
  );
}
