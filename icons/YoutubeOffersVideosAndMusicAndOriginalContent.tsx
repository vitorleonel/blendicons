export function YoutubeOffersVideosAndMusicAndOriginalContent({
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
      <path d="m9.555 16.25c-.128 0-.256-.033-.371-.098-.235-.133-.379-.382-.379-.652v-7c0-.27.146-.519.38-.652.235-.132.523-.13.755.008l5.869 3.505c.227.136.365.38.365.645s-.14.509-.366.644l-5.869 3.495c-.119.07-.251.105-.384.105zm.75-6.429v4.359l3.655-2.176z" />
      <path d="m12.011 21.248c-2.79 0-5.581-.173-7.912-.519-1.861-.276-3.327-1.737-3.647-3.636-.596-3.521-.596-6.663 0-10.186.32-1.898 1.786-3.359 3.647-3.636 4.653-.691 11.151-.691 15.803 0 1.861.276 3.327 1.738 3.647 3.636.3 1.767.451 3.481.451 5.093 0 1.613-.151 3.327-.451 5.094-.321 1.898-1.787 3.359-3.646 3.636-2.323.345-5.107.518-7.892.518zm-.012-16.997c-2.709 0-5.419.168-7.68.503-1.217.182-2.177 1.146-2.389 2.402-.574 3.396-.574 6.292 0 9.687.212 1.256 1.172 2.222 2.39 2.402 4.528.672 10.846.673 15.362.001 1.216-.181 2.176-1.146 2.389-2.402.284-1.685.429-3.314.429-4.844 0-1.528-.145-3.158-.43-4.843-.212-1.256-1.172-2.221-2.39-2.402-2.261-.336-4.971-.504-7.681-.504z" />
    </svg>
  );
}
