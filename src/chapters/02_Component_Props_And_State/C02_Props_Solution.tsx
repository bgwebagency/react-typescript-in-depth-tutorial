// Chapter 02: Add Proper Types to Props

type Props = {
  color: string
}

const Child = (props: Props) => {
  const { color } = props
  return <div>{color}</div>
}

const C02_Props_Solution = () => {
  return <Child color="red" />
}

export default C02_Props_Solution
