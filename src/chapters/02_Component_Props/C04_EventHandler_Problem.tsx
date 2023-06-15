// Chapter 04: Type for EventHandler

type Props = {
  color: string
  children: React.ReactNode
}

const ComponentB: React.FC<Props> = (props) => {
  const { color, children, onCopy, onClick } = props
  return (
    <div style={{ color: color }} onCopy={onCopy}>
      {children}
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}

const ComponentA = () => {
  return (
    <ComponentB
      color="red"
      onCopy={() => console.log('Text copied!')}
      onClick={() => console.log('Button clicked')}
    >
      Some text here
    </ComponentB>
  )
}

export default ComponentA
