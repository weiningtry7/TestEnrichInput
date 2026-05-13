/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { Pressable, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { EnrichedTextInput } from 'react-native-enriched';
import type {
  EnrichedTextInputInstance,
  OnChangeStateEvent,
} from 'react-native-enriched';
import { useRef } from 'react';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const ref = useRef<EnrichedTextInputInstance>(null);

  const onPressSetMention = () => {
    console.log('>>>onPressSetMention<<<')
    ref.current?.setMention('@', '@kangkang', { "user-id": 'userid' })
  }

  const onPressSetImage = () => {
    console.log('>>>onPressSetImage<<<')
     ref?.current?.setImage('https://serverlist-yh.wmupd.com/notice_test5/pic/01.gif', 50, 50)
  }
  return (
    <View style={styles.container}>

      <EnrichedTextInput
        ref={ref}
        style={styles.input}
        placeholder='write something ...'
        htmlStyle={{ mention: { backgroundColor: '#fff', textDecorationLine: 'none', color: '#348FFF' } }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pressable onPress={onPressSetMention}>
          <View style={styles.btn}>
            <Text>{'setMention btn'}</Text>
          </View>
        </Pressable>
        <Pressable onPress={onPressSetImage}>
          <View style={styles.btn}>
            <Text>{'setImage btn'}</Text>
          </View>
        </Pressable>
      </View>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '100%',
    fontSize: 20,
    padding: 10,
    minHeight: 200,
    maxHeight: 600,
    marginTop: 100,
    backgroundColor: 'lightgray',
  },
  btn: { 
    paddingHorizontal: 10, 
    paddingVertical: 5, 
    borderRadius: 6, 
    backgroundColor: '#348FFF' ,
    marginHorizontal: 10
  }
});

export default App;
