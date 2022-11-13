import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: lightblue;
  width: 100%;
  height: 50px;
`

const MainMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 42px;
  background-color: lightcoral;
  width: 400px;
`

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 42px;
  background-color: lightcyan;
  width: 400px;
`

const Body = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`

const PageMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 1000px;
  background-color: lightgoldenrodyellow;
  flex: 284;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 1000px;
  background-color: lightgreen;
  flex: 488;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30%;
  height: 1000px;
  width: 100%;
  background-color: lightseagreen;
`

const Ads = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 1000px;
  background-color: lightpink;
  flex: 362;
`

export const Flex = () => {
  return (
    <Wrapper>
      <Header>
        <MainMenu></MainMenu>
        <UserMenu></UserMenu>
      </Header>
      <Body>
        <PageMenu></PageMenu>
        <ContentWrapper>
          <Content />
        </ContentWrapper>
        <Ads></Ads>
      </Body>
    </Wrapper>
  )
}
