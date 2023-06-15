// Chapter 03: FC or FunctionComponent type

type Props = {
  color: string
  children: React.ReactNode
}

const ComponentB: React.FC<Props> = (props) => {
  const { color, children } = props
  return <div style={{ color: color }}>{children}</div>
}

const ComponentA = () => {
  return <ComponentB color="red">Some text here</ComponentB>
}

export default ComponentA
