// Chapter 03: Type for children

type Props = {
  color: string
}

const ComponentB = (props: Props) => {
  const { color, children } = props
  return <div style={{ color: color }}>{children}</div>
}

const ComponentA = () => {
  return <ComponentB color="red">Some text here</ComponentB>
}

export default ComponentA
