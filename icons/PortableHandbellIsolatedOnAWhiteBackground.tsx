export function PortableHandbellIsolatedOnAWhiteBackground({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m12.394 24.3c-.334 0-.647-.13-.884-.366l-.459-.458c-.28-.281-.458-.651-.502-1.044-.185-1.659-.937-3.222-2.116-4.402l-1.52-1.52c-2.632-2.632-2.632-6.914 0-9.546 1.275-1.275 2.971-1.977 4.773-1.977s3.498.702 4.772 1.977l1.52 1.52c1.181 1.18 2.744 1.931 4.402 2.115.393.043.764.222 1.044.502.359.359.557.836.557 1.343s-.198.984-.557 1.343l-10.147 10.147c-.236.236-.549.366-.883.366zm.175-1.427h.011zm-4.595-14.849c-2.047 2.047-2.047 5.378 0 7.425l1.52 1.52c1.42 1.42 2.324 3.301 2.546 5.296.007.057.031.109.072.15l.282.281 9.971-9.971c.075-.076.117-.176.117-.282s-.042-.207-.117-.283c-.04-.04-.093-.065-.148-.071-1.995-.222-3.877-1.125-5.298-2.545l-1.52-1.52c-.991-.992-2.31-1.538-3.712-1.538s-2.721.546-3.713 1.538z" />
      <path d="m18.498 21.793c-.832 0-1.663-.313-2.295-.94-.21-.209-.384-.436-.519-.677-.201-.362-.072-.819.29-1.021s.818-.071 1.021.289c.066.12.155.235.265.344.685.676 1.798.677 2.482-.001.673-.68.673-1.794-.006-2.479-.106-.107-.222-.196-.34-.261-.362-.201-.493-.657-.293-1.02s.657-.493 1.02-.293c.241.134.47.308.678.517 1.257 1.269 1.257 3.33.002 4.597-.637.63-1.472.945-2.305.945z" />
      <path d="m6.8 9.02c-.192 0-.384-.073-.53-.22l-5.76-5.76c-.684-.684-.684-1.796 0-2.48.65-.649 1.831-.648 2.479-.001l5.761 5.761c.293.293.293.768 0 1.061s-.768.293-1.061 0l-5.759-5.761c-.088-.088-.271-.089-.36.001-.096.096-.097.261 0 .358l5.76 5.76c.293.293.293.768 0 1.061-.146.147-.338.22-.53.22z" />
    </svg>
  );
}
