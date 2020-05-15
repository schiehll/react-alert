import { useContext, useMemo } from 'react'
import DefaultContext from './Context'

const useAlert = Context => {
  const alertContext = useContext(Context || DefaultContext)
  const alert = useMemo(() => {
    return alertContext.current
  }, [alertContext])
  return alert
}

export default useAlert