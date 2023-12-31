// Chapter 01: Finding the correct types by navigating between type definitions

const C01_Navigation_Solution = () => {
  return (
    <div
      // type for aria-autocomplete ?
      aria-autocomplete={'none'}
      // type for translate ?
      translate={'yes'}
      // type for onClick ?
      onClick={(e) => {
        console.log(e)
      }}
    >
      C01_Navigation_Solution
    </div>
  )
}

export default C01_Navigation_Solution

// 💡 Tips: How to Navigate between type files ?
// Go to the type file and press F12 or Cmd + Click to navigate to the type file from the component file.
// To go back to reference during navigation, press control and - (minus) key.
// For windows, please google the shortcuts for go to and back to reference.
