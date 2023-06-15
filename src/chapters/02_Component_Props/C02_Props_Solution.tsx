// Chapter 02: Add Proper Types to Props

type Props = {
  color: string
}

const ComponentB = (props: Props) => {
  const { color } = props
  return <div style={{ color: color }}>Color of this text is: {color}</div>
}

const ComponentA = () => {
  return <ComponentB color="red" />
}

export default ComponentA
