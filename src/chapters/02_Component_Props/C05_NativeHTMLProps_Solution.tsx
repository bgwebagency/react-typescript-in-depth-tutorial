// Chapter 05: Native HTML props

type Props = React.ComponentProps<'div'> & {
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
      onCopy={() => console.log('Text copied!')}
      tabIndex={3}
    >
      Some text here
    </ComponentB>
  )
}

export default ComponentA
