import { useContext } from 'react'
import DefaultContext from './Context'

const useAlert = Context => useContext(Context || DefaultContext)

export default useAlert
