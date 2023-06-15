// Chapter 05: Native HTML props

type Props = {
  color: string
  children: React.ReactNode
  onCopy: React.ClipboardEventHandler<HTMLDivElement>
}

const ComponentB: React.FC<Props> = (props) => {
  const { color, children, onCopy, tabIndex } = props
  return (
    <div style={{ color: color }} onCopy={onCopy} tabIndex={tabIndex}>
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
