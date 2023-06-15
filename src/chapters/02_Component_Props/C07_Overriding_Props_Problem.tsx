// Chapter 07: Overriding Props

type Props = Omit<React.ComponentProps<'div'>, 'onCopy' | 'tabIndex'> & {
  color: string
  children: React.ReactNode
}

const ComponentB: React.FC<Props> = (props) => {
  const { color, children, ...rest } = props
  return (
    <div style={{ color: color }} {...rest}>
      {children}
    </div>
  )
}

const ComponentA = () => {
  return (
    <ComponentB
      color="red"
      // override onCopy type from EventHandler to Function with string argument
      onCopy={(message) => {
        console.log(message)
      }}
    >
      Some text here
    </ComponentB>
  )
}

export default ComponentA
