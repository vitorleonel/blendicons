export function FavoriteCardWithStarredForFrequentPayment({
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
      <path d="m21.054 24c-.147 0-.294-.043-.422-.13l-3.132-2.131-3.132 2.131c-.257.175-.595.173-.852-.006-.255-.178-.374-.497-.297-.798l.975-3.85-2.932-2.503c-.233-.199-.321-.52-.224-.81.098-.29.363-.492.668-.509l3.735-.211 1.354-3.69c.109-.297.391-.493.705-.493s.596.196.704.492l1.354 3.69 3.735.211c.306.018.57.219.668.509.098.291.009.611-.224.81l-2.932 2.503.975 3.85c.077.302-.042.62-.297.798-.129.092-.279.137-.429.137zm-3.554-3.918c.147 0 .294.043.422.13l1.919 1.306-.604-2.385c-.07-.276.023-.569.24-.754l1.865-1.593-2.362-.134c-.299-.017-.559-.21-.662-.491l-.818-2.233-.819 2.233c-.103.281-.363.474-.662.491l-2.362.134 1.865 1.593c.217.186.31.478.24.754l-.604 2.385 1.919-1.306c.129-.087.276-.13.423-.13z" />
      <path d="m9.31 16h-6.56c-1.517 0-2.75-1.233-2.75-2.75v-10.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v10.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-10.5c0-.689-.561-1.25-1.25-1.25h-18.5c-.689 0-1.25.561-1.25 1.25v10.5c0 .689.561 1.25 1.25 1.25h6.56c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m6.25 4.5h-2.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m12 11c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z" />
    </svg>
  );
}
