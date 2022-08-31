import * as React from "react";
import { SVGProps } from "react";

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="#fff"
      d="m62.016 54.462-15.16-12.893c-1.567-1.41-3.243-2.058-4.597-1.995a23.907 23.907 0 0 0 5.74-15.573c0-13.255-10.745-24-24-24s-24 10.745-24 24 10.745 24 24 24a23.907 23.907 0 0 0 15.574-5.74c-.063 1.354.585 3.03 1.995 4.597l12.893 15.16c2.208 2.453 5.814 2.66 8.014.46s1.993-5.806-.46-8.014zM24 40c-8.836 0-16-7.163-16-16S15.163 8 24 8s16 7.163 16 16-7.163 16-16 16z"
    />
  </svg>
);

export default SvgSearch;
