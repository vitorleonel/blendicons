export function HandheldLightSourceForIlluminatingDarkness({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
    >
      <defs></defs>
      <path
        className="cls-1"
        d="M6.22,.22c.29-.29,.77-.29,1.06,0l5,5c.29,.29,.29,.77,0,1.06l-6,6c-.29,.29-.77,.29-1.06,0L.22,7.28c-.29-.29-.29-.77,0-1.06L6.22,.22ZM1.81,6.75l3.94,3.94,4.94-4.94L6.75,1.81,1.81,6.75Z"
      />
      <path
        className="cls-1"
        d="M10.22,6.22c.29-.29,.77-.29,1.06,0l9.5,9.5c.29,.29,.29,.77,0,1.06l-4,4c-.29,.29-.77,.29-1.06,0L6.22,11.28c-.29-.29-.29-.77,0-1.06l4-4Zm-2.41,4.53l8.44,8.44,2.94-2.94L10.75,7.81l-2.94,2.94Z"
      />
      <path
        className="cls-1"
        d="M10.22,10.22c.29-.29,.77-.29,1.06,0l1,1c.29,.29,.29,.77,0,1.06s-.77,.29-1.06,0l-1-1c-.29-.29-.29-.77,0-1.06Z"
      />
    </svg>
  );
}
