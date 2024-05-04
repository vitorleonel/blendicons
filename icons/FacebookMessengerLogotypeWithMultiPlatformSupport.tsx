export function FacebookMessengerLogotypeWithMultiPlatformSupport({
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
      <path d="m4.174 24c-.131 0-.262-.034-.378-.103-.23-.134-.372-.381-.372-.647v-4.529c-2.211-2.062-3.424-4.783-3.424-7.699 0-6.078 5.383-11.022 12-11.022s12 4.944 12 11.022c0 6.077-5.383 11.021-12 11.021-1.147 0-2.278-.149-3.367-.442l-4.091 2.303c-.115.064-.241.096-.368.096zm7.826-22.5c-5.79 0-10.5 4.271-10.5 9.522 0 2.589 1.125 5.005 3.169 6.803.162.142.254.348.254.563v3.579l3.246-1.827c.177-.099.386-.123.582-.065 1.044.311 2.138.468 3.249.468 5.79 0 10.5-4.271 10.5-9.521 0-5.251-4.71-9.522-10.5-9.522z" />
      <path d="m13.5 15.333c-.189.024-.396-.082-.538-.227l-2.618-2.69-5.509 2.755c-.329.165-.729.066-.944-.232-.215-.299-.182-.709.079-.969l6-6c.142-.142.351-.23.534-.22.2.001.392.082.532.225l2.614 2.669 5.509-2.812c.328-.167.728-.072.946.225s.188.708-.071.97l-6 6.083c-.141.143-.333.223-.534.223zm-3-4.583c.198 0 .393.078.538.227l2.466 2.535 2.203-2.233-1.866.952c-.29.148-.646.092-.876-.143l-2.47-2.521-2.196 2.196 1.866-.933c.106-.054.221-.08.335-.08z" />
    </svg>
  );
}
