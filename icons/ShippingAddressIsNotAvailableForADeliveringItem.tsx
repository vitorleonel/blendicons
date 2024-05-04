export function ShippingAddressIsNotAvailableForADeliveringItem({
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
      <path d="m17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-11.5c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
      <path d="m13.43 22.32c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l8.141-8.14c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-8.142 8.14c-.147.147-.338.22-.53.22z" />
      <path d="m9.25 21h-7.5c-.965 0-1.75-.785-1.75-1.75v-17.5c0-.965.785-1.75 1.75-1.75h17.5c.965 0 1.75.785 1.75 1.75v7.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7.5c0-.138-.112-.25-.25-.25h-17.5c-.138 0-.25.112-.25.25v17.5c0 .138.112.25.25.25h7.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
      <path d="m14.25 9c-.187 0-.37-.069-.512-.202l-3.238-3.022-3.238 3.022c-.219.203-.538.258-.811.14-.274-.119-.451-.389-.451-.688v-7.5c0-.414.336-.75.75-.75h7.5c.414 0 .75.336.75.75v7.5c0 .299-.177.569-.451.688-.096.041-.198.062-.299.062zm-3.75-5c.184 0 .367.067.512.202l2.488 2.322v-5.024h-6v5.024l2.488-2.322c.145-.135.328-.202.512-.202z" />
    </svg>
  );
}
