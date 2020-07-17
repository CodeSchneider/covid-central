import React from "react";

export default function sick(props) {
  const { color } = props;
  return (
    <svg
      id="sick"
      data-name="sick"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 808 808"
    >
      <defs>
        <style>
        {`
          .cls-1{fill:${color};}
        `}
        </style>
      </defs>
      <title>sick</title><path class="cls-1" d="M543,266H808V543H543V808H266V543H0V266H266V0H543ZM488,55H320V320H55V488H320V754H488V488H754V320H488Z"/>
    </svg>
  );
}
