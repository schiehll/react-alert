import { useContext, useMemo,useCallback } from 'react'
import DefaultContext from './Context'

const useAlert = Context => {
  const alertContext = useContext(Context || DefaultContext)
  const alert = useCallback(() => {
    return alertContext.current
  }, [alertContext])
  return alert
}

export default useAlert
