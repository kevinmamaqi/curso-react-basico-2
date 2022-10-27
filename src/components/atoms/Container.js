import styled from 'styled-components'
import { FlexBox } from './FlexBox'

export const Container = styled(FlexBox)`
  padding-left: ${({ px }) => px || '30px'};
  padding-right: ${({ px }) => px || '30px'};
`
