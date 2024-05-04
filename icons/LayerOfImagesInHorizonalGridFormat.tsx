export function LayerOfImagesInHorizonalGridFormat({
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
      <path d="m24 1.75c0-.965-.785-1.75-1.75-1.75h-20.5c-.965 0-1.75.785-1.75 1.75v3.5c0 .965.785 1.75 1.75 1.75h20.5c.965 0 1.75-.785 1.75-1.75v-.031c0-.001 0-.002 0-.003zm-22.5 0c0-.138.112-.25.25-.25h20.5c.138 0 .25.112.25.25v2.378c-1.708-.661-3.195-1.128-4.63-1.128-1.9 0-3.631.645-4.84 1.249-1.702-.672-3.36-1.249-4.94-1.249-2.709 0-5.142 1.287-6.588 2.254 0-.002-.002-.003-.002-.004zm14.682 3.75c-.406-.154-.789-.309-1.178-.465.853-.303 1.836-.535 2.866-.535 1.178 0 2.493.412 4.02 1zm-4.081 0h-7.986c1.133-.536 2.523-1 3.975-1 1.216 0 2.587.451 4.011 1z" />
      <path d="m24 10.25c0-.965-.785-1.75-1.75-1.75h-20.5c-.965 0-1.75.785-1.75 1.75v3.5c0 .965.785 1.75 1.75 1.75h20.5c.965 0 1.75-.785 1.75-1.75v-.031c0-.001 0-.002 0-.003zm-22.5 0c0-.138.112-.25.25-.25h20.5c.138 0 .25.112.25.25v2.378c-1.708-.661-3.195-1.128-4.63-1.128-1.9 0-3.631.645-4.84 1.249-1.702-.672-3.36-1.249-4.94-1.249-2.709 0-5.142 1.287-6.588 2.254 0-.001-.002-.002-.002-.004zm14.682 3.75c-.406-.154-.789-.309-1.178-.465.853-.303 1.836-.535 2.866-.535 1.178 0 2.493.412 4.02 1zm-4.081 0h-7.986c1.133-.536 2.523-1 3.975-1 1.216 0 2.587.451 4.011 1z" />
      <path d="m24 22.217v-3.467c0-.965-.785-1.75-1.75-1.75h-20.5c-.965 0-1.75.785-1.75 1.75v3.5c0 .965.785 1.75 1.75 1.75h20.5c.965 0 1.75-.785 1.75-1.75v-.031s0-.001 0-.002zm-22.5-3.467c0-.138.112-.25.25-.25h20.5c.138 0 .25.112.25.25v2.378c-1.708-.661-3.195-1.128-4.63-1.128-1.9 0-3.631.645-4.84 1.249-1.702-.672-3.36-1.249-4.94-1.249-2.709 0-5.142 1.287-6.588 2.254 0-.001-.002-.002-.002-.004zm14.682 3.75c-.406-.154-.789-.309-1.178-.465.853-.303 1.836-.535 2.866-.535 1.178 0 2.493.412 4.02 1zm-4.081 0h-7.986c1.133-.536 2.523-1 3.975-1 1.216 0 2.587.451 4.011 1z" />
    </svg>
  );
}
