import type { SVGProps } from 'react'

const Line = ( { ...props }: SVGProps<SVGSVGElement> ) => (
  <svg
    width={127}
    height={3}
    viewBox="0 0 127 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path stroke="#E9E5DA" strokeWidth={3} d="M0 1.5h127" />
  </svg>
)

export default Line
