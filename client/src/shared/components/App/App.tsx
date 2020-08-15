import React, { FC } from 'react'
import styled from '../Styled'
import { FeedPage } from '../../../pages/Feed'

// Component
const App: FC = () => (
  <AppContainer>
    <FeedPage />
  </AppContainer>
)

// Styled Components
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: ${props => props.theme.colors.background};
`

// Display Name
App.displayName = `App`
AppContainer.displayName = `AppContainer`

export default App
