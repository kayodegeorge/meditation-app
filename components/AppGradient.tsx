import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Text } from 'react-native'
import Content from './Content'

const AppGradient = ({
  children,
  colors,
}: {
  children: any
  colors: string[]
}) => {
  const isTextChild =
    typeof children === 'string' || typeof children === 'number'

  return (
    <LinearGradient colors={colors} className='flex-1 '>
      <Content>
        {/* Check if children is a string/number and wrap it in <Text> */}
        {isTextChild ? <Text>{children}</Text> : children}
      </Content>
    </LinearGradient>
  )
}

export default AppGradient
