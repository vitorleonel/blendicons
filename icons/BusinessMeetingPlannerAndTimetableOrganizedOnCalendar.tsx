export function BusinessMeetingPlannerAndTimetableOrganizedOnCalendar({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <g id="Layer_1" display="none">
        <path
          display="inline"
          fill="#ECEFF1"
          d="M23,8.04H1c-0.552,0-1,0.448-1,1V21c0,1.654,1.346,3,3,3h18c1.654,0,3-1.346,3-3V9.04
		C24,8.488,23.552,8.04,23,8.04z"
        />
        <path
          display="inline"
          fill="#42A5F5"
          d="M21,3H3C1.343,3,0,4.343,0,6v3.04h24V6C24,4.343,22.657,3,21,3z"
        />
        <path
          display="inline"
          fill="#607D8B"
          d="M6,0H5C4.448,0,4,0.448,4,1v4c0,0.552,0.448,1,1,1h1c0.552,0,1-0.448,1-1V1
		C7,0.448,6.552,0,6,0z"
        />
        <path
          display="inline"
          fill="#607D8B"
          d="M19,0h-1c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h1c0.552,0,1-0.448,1-1V1
		C20,0.448,19.552,0,19,0z"
        />
      </g>
      <g id="Layer_2" display="none">
        <path
          display="inline"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="
		M21.5,23.5h-19c-1.105,0-2-0.895-2-2v-17c0-1.105,0.895-2,2-2h19c1.105,0,2,0.895,2,2v17C23.5,22.605,22.605,23.5,21.5,23.5z"
        />

        <line
          display="inline"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="0.5"
          y1="8.5"
          x2="23.5"
          y2="8.5"
        />

        <line
          display="inline"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="5.5"
          y1="0.5"
          x2="5.5"
          y2="4.5"
        />

        <line
          display="inline"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="18.5"
          y1="0.5"
          x2="18.5"
          y2="4.5"
        />
      </g>
      <g id="Layer_3">
        <g>
          <path
            d="M21.25,24H2.75C1.233,24,0,22.767,0,21.25V4.75C0,3.233,1.233,2,2.75,2h18.5C22.767,2,24,3.233,24,4.75v16.5
			C24,22.767,22.767,24,21.25,24z M2.75,3.5C2.061,3.5,1.5,4.061,1.5,4.75v16.5c0,0.689,0.561,1.25,1.25,1.25h18.5
			c0.689,0,1.25-0.561,1.25-1.25V4.75c0-0.689-0.561-1.25-1.25-1.25H2.75z"
          />
        </g>
        <g>
          <path d="M23.25,9.5H0.75C0.336,9.5,0,9.164,0,8.75S0.336,8,0.75,8h22.5C23.664,8,24,8.336,24,8.75S23.664,9.5,23.25,9.5z" />
        </g>
        <g>
          <path d="M5.75,6C5.336,6,5,5.664,5,5.25v-4.5C5,0.336,5.336,0,5.75,0S6.5,0.336,6.5,0.75v4.5C6.5,5.664,6.164,6,5.75,6z" />
        </g>
        <g>
          <path
            d="M18.25,6c-0.414,0-0.75-0.336-0.75-0.75v-4.5C17.5,0.336,17.836,0,18.25,0S19,0.336,19,0.75v4.5
			C19,5.664,18.664,6,18.25,6z"
          />
        </g>
      </g>
      <g id="Layer_4" display="none">
        <path
          display="inline"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="
		M23,6v3.04H1V6c0-1.1,0.9-2,2-2h18C22.1,4,23,4.9,23,6z"
        />

        <path
          display="inline"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="
		M23,9.04V21c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V9.04H23z"
        />
        <path
          display="inline"
          d="M6,0H5C4.448,0,4,0.448,4,1v5h3V1C7,0.448,6.552,0,6,0z"
        />
        <path
          display="inline"
          d="M19,0h-1c-0.552,0-1,0.448-1,1v5h3V1C20,0.448,19.552,0,19,0z"
        />
      </g>
    </svg>
  );
}
