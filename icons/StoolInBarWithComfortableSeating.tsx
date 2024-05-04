export function StoolInBarWithComfortableSeating({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="M4.79388,2.99374c0.24371,-1.21851 1.42906,-2.00874 2.64757,-1.76504l1.07768,0.21553c2.29797,0.45959 4.66417,0.45959 6.96217,0l1.0776,-0.21553c1.2185,-0.243704 2.4039,0.54653 2.6476,1.76504c0.2437,1.21851 -0.5465,2.40387 -1.765,2.64757l-1.0777,0.21554c-2.8806,0.5761 -5.8467,0.5761 -8.72719,0l-1.07768,-0.21554c-1.21851,-0.2437 -2.00875,-1.42906 -1.76505,-2.64757Zm2.3534,-0.29417c-0.40617,-0.08124 -0.80129,0.18218 -0.88253,0.58835c-0.08123,0.40617 0.18218,0.80129 0.58835,0.88252l1.07768,0.21554c2.68632,0.53726 5.45252,0.53726 8.13882,0l1.0777,-0.21554c0.4061,-0.08123 0.6696,-0.47635 0.5883,-0.88252c-0.0812,-0.40617 -0.4763,-0.66959 -0.8825,-0.58835l-1.0777,0.21553c-2.4921,0.49843 -5.0583,0.49843 -7.55045,0l-1.07767,-0.21553Z"></path>
        <path d="M17.9856,11.7876c0.0812,0.4062 -0.1822,0.8013 -0.5884,0.8826l-1.2562,0.2512c-2.5663,0.5133 -5.2065,0.5364 -7.78133,0.0683l-1.7437,-0.3171c-0.40754,-0.0741 -0.67784,-0.4645 -0.60374,-0.872c0.07409,-0.4076 0.46453,-0.6779 0.87206,-0.6038l1.74371,0.317c2.3887,0.4344 4.838,0.4129 7.2188,-0.0633l1.2562,-0.2512c0.4062,-0.0813 0.8013,0.1822 0.8826,0.5883Z"></path>
        <path d="M7.60616,4.6922c0.41005,0.05858 0.69498,0.43848 0.6364,0.84853l-2.5,17.5c-0.05858,0.4101 -0.43848,0.695 -0.84853,0.6364c-0.41005,-0.0586 -0.69498,-0.4385 -0.6364,-0.8485l2.5,-17.5c0.05858,-0.41005 0.43848,-0.69497 0.84853,-0.6364Z"></path>
        <path d="M16.3941,4.6922c-0.4101,0.05858 -0.695,0.43848 -0.6364,0.84853l2.5,17.5c0.0586,0.4101 0.4385,0.695 0.8485,0.6364c0.4101,-0.0586 0.695,-0.4385 0.6364,-0.8485l-2.5,-17.5c-0.0586,-0.41005 -0.4385,-0.69497 -0.8485,-0.6364Z"></path>
      </g>
    </svg>
  );
}
