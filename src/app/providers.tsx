// app/providers.tsx
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  zIndices: {
    modal: 99999
  },
  colors: {
    primary: '#637788',
    black: '#1A1A1A',
    white: '#ffffff',
    danger: '#EC5E6B',
    warning: '#F7CB2F',
    favorite: '#FD4477',
    textBlack: '#1A1A1A',
    textPrimary: '#637788',
    textSecondary: '#4D596A',
    textGray: '#626364',
    textLink: '#3E8BFF',
    textDisabled: '#A2A2A2',
    textWhite: '#FFFFFF',
    border: '#818181',
    line: '#EFEFEF',
    bgColumn: '#F4F4F4',
    bgDialog: '#676767',
    bgDisabled: '#E3E3E3'
  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}