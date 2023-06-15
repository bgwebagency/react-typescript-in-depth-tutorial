// Chapter 08: Extracting Props

import { ReactNode } from 'react'

export const ComponentB: React.FC = (props) => {
  const { color, children } = props
  return <div style={{ color: color }}>{children}</div>
}

const ComponentA: React.FC<{ color: string; children: ReactNode }> = (
  props
) => {
  const { color, children } = props
  return <div style={{ color: color }}>{children}</div>
}

export default ComponentA
