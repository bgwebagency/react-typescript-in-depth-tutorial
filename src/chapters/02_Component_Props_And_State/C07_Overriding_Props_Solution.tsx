// Chapter 07: Overriding Props

type Props = Omit<React.ComponentProps<'div'>, 'onCopy' | 'tabIndex'> & {
  color: string
  children: React.ReactNode
  onCopy: (message: string) => void
}

const ComponentB: React.FC<Props> = (props) => {
  const { color, children, onCopy, ...rest } = props

  return (
    <div style={{ color: color }} onCopy={() => onCopy} {...rest}>
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
