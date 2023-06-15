// Chapter 06: Removing Prop from type

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
      // Modify Props type so that onCopy and tabIndex props are not allowed on ComponentB
      onCopy={() => console.log('Text copied!')}
      tabIndex={3}
      onCut={() => console.log('Text cut!')}
    >
      Some text here
    </ComponentB>
  )
}

export default ComponentA
