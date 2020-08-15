import React, { FC } from 'react'
import styled from '../../../../shared/components/Styled'
import { device } from '../../../../shared/constants'

// Component
const Splash: FC = () => (
  <SplashContainer>
    <Title>blabber.haus</Title>
    <Subtitle>A social media for those that want to talk non-sense.</Subtitle>
    <Subtitle>Coming soon...</Subtitle>
  </SplashContainer>
)

// Styles
const SplashContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  font-family: ${({ theme }) => theme.fonts.heading};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSizes[7]}px;
  }
`

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  font-family: ${({ theme }) => theme.fonts.body};
  text-align: center;

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
  }
`

// Display Names
Splash.displayName = `Splash`
SplashContainer.displayName = `SplashContainer`
Title.displayName = `Title`
Subtitle.displayName = `Subtitle`

export default Splash
