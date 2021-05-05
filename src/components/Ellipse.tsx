import type { SVGProps } from 'react'

const Ellipse = ( { ...props }: SVGProps<SVGSVGElement> ) => (
  <svg
    width={400}
    height={399}
    viewBox="0 0 400 399"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={200} cy={200} r={200} fill="#40505F" />
  </svg>
)

export default Ellipse
