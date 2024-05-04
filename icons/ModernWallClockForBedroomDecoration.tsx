export function ModernWallClockForBedroomDecoration({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="M12,1.75c-5.66092,0 -10.25,4.58908 -10.25,10.25c0,5.6609 4.58908,10.25 10.25,10.25c5.6609,0 10.25,-4.5891 10.25,-10.25c0,-5.66092 -4.5891,-10.25 -10.25,-10.25Zm-11.75,10.25c0,-6.48935 5.26065,-11.75 11.75,-11.75c6.4893,0 11.75,5.26065 11.75,11.75c0,6.4893 -5.2607,11.75 -11.75,11.75c-6.48935,0 -11.75,-5.2607 -11.75,-11.75Z"></path>
        <path d="M12,4.25c-4.28021,0 -7.75,3.46979 -7.75,7.75c0,4.2802 3.46979,7.75 7.75,7.75c4.2802,0 7.75,-3.4698 7.75,-7.75c0,-4.28021 -3.4698,-7.75 -7.75,-7.75Zm-9.25,7.75c0,-5.10863 4.14137,-9.25 9.25,-9.25c5.1086,0 9.25,4.14137 9.25,9.25c0,5.1086 -4.1414,9.25 -9.25,9.25c-5.10863,0 -9.25,-4.1414 -9.25,-9.25Z"></path>
        <path d="M12,5.25c0.4142,0 0.75,0.33579 0.75,0.75v5.7923l2.8931,4.8218c0.2131,0.3552 0.098,0.8159 -0.2572,1.029c-0.3552,0.2131 -0.8159,0.098 -1.029,-0.2572l-3,-5c-0.07,-0.1166 -0.1069,-0.25 -0.1069,-0.3859v-6c0,-0.41421 0.3358,-0.75 0.75,-0.75Z"></path>
      </g>
    </svg>
  );
}
