import React from 'react'
import { ColorContainer } from './styles'

export const colors = {
  primary: '#842EB0',
  secondary: '#FCB017',
  warning: '#5F259F',
  dark: '#525252',
  lightDark: '#848484',
  gray: '#CCCCCC',
  lightGray: '#ECECEC',
  light: '#FFFFFF',
  success: '#7CD4DA',
  error: '#F65A3D'
}

export const listOfColors = {
  colors: [
    {
      id: 1,
      colorName: 'primary',
      color: colors.primary,
      textColor: colors.light
    },
    {
      id: 2,
      colorName: 'secondary',
      color: colors.secondary,
      textColor: colors.light
    },
    {
      id: 3,
      colorName: 'warning',
      color: colors.warning,
      textColor: colors.light
    },
    {
      id: 4,
      colorName: 'success',
      color: colors.success,
      textColor: colors.light
    },
    {
      id: 5,
      colorName: 'error',
      color: colors.error,
      textColor: colors.light
    },
    {
      id: 6,
      colorName: 'dark',
      color: colors.dark
    },
    {
      id: 7,
      colorName: 'lightDark',
      color: colors.lightDark,
      textColor: colors.dark
    },
    {
      id: 8,
      colorName: 'gray',
      color: colors.gray,
      textColor: colors.dark
    },
    {
      id: 9,
      colorName: 'lightGray',
      color: colors.lightGray,
      textColor: colors.dark
    },
    {
      id: 10,
      colorName: 'light',
      color: colors.light,
      textColor: colors.dark
    }
  ]
}

export default function Color() {
  return (
    <>
      {listOfColors.colors.map(selectedColor => (
        <ColorContainer
          key={selectedColor.id}
          color={selectedColor.color}
          text={selectedColor.textColor}
        >
          <h2>
            {selectedColor.colorName} {selectedColor.color}
          </h2>
        </ColorContainer>
      ))}
    </>
  )
}
