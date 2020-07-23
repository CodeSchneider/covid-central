import * as React from "react";
import { css, cx } from "emotion";

const cssRadioButton = css`
  font-size: 17px;

  .label {
    cursor: pointer;
    border-radius: 11px;
    color: #757575;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 88px;
    margin-bottom: 16px;
    padding: 0 16px;
    border: 3px solid #fff;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.1);
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
    background-color: #fff;
  }

  .radioCheck {
    opacity: 0;
    fill: #0071E3;
  }

  .radioOutline {
    opacity: 1;
    fill: #ededed;
  }

  .text {
    font-family: 'BentonSans-Medium', 'Helvetica Neue', helvetica, arial, sans-serif;
    font-size: 17px;
    color: #424242;
  }

  .input {
    opacity: 0;
    position: absolute;

    /* &:focus,
    &:hover {
      & + .label {
        color: initial;
        background-color: #fbfbfc;

        .radioDot {
          opacity: 0.13;
        }

        .radioOutline {
          opacity: 0.7;
        }
      }
    } */

    &:checked + .label {
      color: initial;
      border: 3px solid #0071e3;

      .radioCheck {
        opacity: 1;
      }
      .radioOutline {
        opacity: 0;
      }
    }
  }
`;

function RadioButton({
  name,
  id,
  value,
  required,
  children,
  isChecked,
  handleChange,
  className,
  ...props
}) {
  return (
    <div className={cssRadioButton}>
      <input
        className="input"
        id={id}
        name={name}
        value={value}
        required={required}
        type="radio"
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
      <label className={cx("label", className)} htmlFor={id}>
        <span className="text">{children}</span>
        <svg
          className="svg"
          fill="currentColor"
          preserveAspectRatio="xMidYMid meet"
          height="22"
          width="22"
          viewBox="0 0 100 100"
        >
          <path className="radioOutline" d="M50.026 99.996c27.448 0 49.967-22.52 49.967-49.967 0-27.449-22.52-50.065-50.064-50.065C22.48-.036-.04 22.58-.04 50.03c0 27.448 22.616 49.967 50.065 49.967zm0-12.854a37 37 0 01-37.114-37.113c0-20.587 16.527-37.21 37.017-37.21 20.586 0 37.21 16.623 37.21 37.21.097 20.586-16.527 37.113-37.113 37.113z" fill-rule="nonzero"></path>
          <path className="radioCheck" d="M50.026 99.996c27.448 0 49.967-22.52 49.967-49.967 0-27.449-22.52-50.065-50.064-50.065C22.48-.036-.04 22.58-.04 50.03c0 27.448 22.616 49.967 50.065 49.967zm-5.22-26.192c-2.126 0-3.866-1.063-5.412-2.9L28.376 57.858c-1.063-1.353-1.546-2.61-1.546-4.06 0-2.899 2.416-5.315 5.412-5.315 1.643 0 2.996.773 4.253 2.223l8.215 9.955 18.267-28.995c1.256-2.03 2.802-3.093 4.735-3.093 2.9 0 5.51 2.223 5.51 5.123 0 1.256-.484 2.513-1.257 3.77L49.929 70.807c-1.257 1.836-3.093 2.996-5.123 2.996z" fill-rule="nonzero"></path>
          {/*<circle
            className="radioOutline"
            cx="15"
            cy="15"
            r="13"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />*/}
          {/*<circle className="radioDot" cx="15" cy="15" r="6" fill="#000" />*/}
        </svg>
      </label>
    </div>
  );
}

export default RadioButton;
