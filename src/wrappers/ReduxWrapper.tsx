import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/lib/store/store'
import { persistStore } from 'redux-persist'

persistStore(store)

function ReduxWrapper({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ReduxWrapper