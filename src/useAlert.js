import { useContext } from 'react'
import DefaultContext from './Context'

const useAlert = Context => {
  const alertContext = useContext(Context || DefaultContext)

  return alertContext.current
}

export default useAlert
