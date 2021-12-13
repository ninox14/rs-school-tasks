import * as React from "react";
import { SVGProps } from "react";

const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="#fff"
      d="M31.416 2.188c-.086.928-.089 2.097-.008 2.598.147.904.141.912-.872 1.083-1.832.31-2.254.863-2.338 3.063-.072 1.899-.078 1.913-.823 2.079-7.044 1.563-8.001 2.57-8.38 8.815-.564 9.276-1.567 14.428-3.841 19.716-.217.505-.945 1.645-1.617 2.534-2.553 3.373-2.797 3.825-3.2 5.923-.115.601.62 4.193 1.012 4.941 1.376 2.627 6.934 5.896 12.977 7.633 1.57.451 3.063 1.029 3.317 1.283 1.752 1.752 7.531 1.854 8.921.158.447-.545 1.043-.801 2.936-1.258 5.069-1.224 9.685-3.508 12.59-6.229 2.826-2.648 2.754-7.651-.167-11.493-.769-1.012-1.813-2.7-2.319-3.75l-1.108-2.298c-.87-1.797-2.125-8.864-2.505-14.112-.577-7.963-.562-7.882-1.714-8.906-1.265-1.124-3.222-2.092-5.026-2.484-2.812-.612-2.596-.408-2.875-2.716-.298-2.465-.762-3.019-2.528-3.019h-1.097V3.608c0-3.398-1.048-4.515-1.334-1.421z"
    />
  </svg>
);

export default SvgBell;
