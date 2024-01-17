import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

const EndGameFinanse = () => {
  return (
      <View style={styles.EndGameContainer}>
      <Text>GAME OVER</Text>
      </View>
  )
}

export default EndGameFinanse

const styles = StyleSheet.create({
  EndGameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  
})