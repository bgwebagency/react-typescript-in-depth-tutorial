// Chapter 08: Extracting Props

import { ComponentProps, ReactNode } from 'react'

export const ComponentB: React.FC<ComponentProps<typeof ComponentA>> = (
  props
) => {
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
