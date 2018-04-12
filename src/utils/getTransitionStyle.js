const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0,
      transform: `translateY(3px)`
    },
    entered: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateY(0)`
    },
    exiting: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `translateY(3px)`
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle
