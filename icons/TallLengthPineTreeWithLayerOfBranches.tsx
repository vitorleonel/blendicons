export function TallLengthPineTreeWithLayerOfBranches({
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
      <path d="m12 24.05c-.414 0-.75-.336-.75-.75v-3c0-.414.336-.75.75-.75s.75.336.75.75v3c0 .414-.336.75-.75.75z" />
      <path d="m17.25 9.05h-10.5c-.28 0-.536-.156-.665-.404s-.11-.547.051-.776l5.25-7.5c.28-.4.948-.4 1.229 0l5.25 7.5c.161.229.18.528.051.776-.13.248-.386.404-.666.404zm-9.06-1.5h7.619l-3.809-5.443z" />
      <path d="m19.25 15.05h-14.5c-.285 0-.545-.162-.672-.417-.126-.256-.097-.561.076-.788l4.338-5.691c.252-.33.722-.393 1.051-.142.33.251.393.722.142 1.051l-3.42 4.486h11.471l-3.42-4.486c-.251-.329-.188-.8.142-1.051s.799-.188 1.051.142l4.338 5.691c.173.227.202.532.076.788-.128.255-.388.417-.673.417z" />
      <path d="m20.25 21.006h-16.5c-.283 0-.542-.159-.669-.412-.127-.252-.102-.556.066-.783l4.3-5.824c.246-.333.716-.404 1.049-.158s.404.716.158 1.049l-3.417 4.628h13.528l-3.417-4.628c-.246-.333-.175-.803.158-1.049.332-.246.802-.175 1.049.158l4.3 5.824c.168.228.193.531.066.783-.129.253-.388.412-.671.412z" />
    </svg>
  );
}
