export function CargoItemInQueueForADelivery({
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
      <path d="m19.75 20.5c-.161 0-.323-.052-.46-.158l-2.25-1.75c-.183-.142-.29-.36-.29-.592v-3.25c0-.414.336-.75.75-.75s.75.336.75.75v2.883l1.96 1.525c.327.254.386.725.131 1.052-.147.19-.368.29-.591.29z" />
      <path d="m17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-11.5c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
      <path d="m9.25 20h-7.674c-.869 0-1.576-.707-1.576-1.576v-12.174c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75v3c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.25h-17v11.424c0 .042.034.076.076.076h7.674c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m19.25 7c-.263 0-.519-.139-.656-.386l-2.769-4.985c-.043-.08-.127-.129-.218-.129h-11.214c-.091 0-.175.049-.219.128l-2.768 4.986c-.202.362-.659.49-1.02.292-.362-.201-.493-.658-.292-1.02l2.769-4.986c.308-.555.894-.9 1.53-.9h11.214c.636 0 1.222.345 1.53.901l2.769 4.985c.201.362.07.819-.292 1.02-.115.064-.24.094-.364.094z" />
      <path d="m10 7c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75z" />
    </svg>
  );
}
