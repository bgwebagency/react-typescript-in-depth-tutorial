// Chapter 02: Add Proper Types to Props

const Child = (props) => {
  const { color } = props
  return <div>{color}</div>
}

const C02_Props_Problem = () => {
  return <Child color="red" />
}

export default C02_Props_Problem
