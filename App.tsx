import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable, TextInput, StatusBar} from 'react-native';
import {Conversation, Translate} from './assets';
import { AskAQuestion, Translation } from './src/components';

interface ContentProps {
  selectedIndex: number;
}

const Content: React.FC<ContentProps> = ({ selectedIndex }) => {
  switch (selectedIndex) {
    case 0: 
      return <AskAQuestion />
    case 1:
      return <Translation />
    default: return <></>;
  }
}

const App: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const changeSelection = (selection: number) => () => setSelectedIndex(selection);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Content {...{selectedIndex}} />
      <View style={styles.tabBar}>
        <Pressable onPress={changeSelection(0)}>
          <Image style={styles.tabIcon} source={Conversation} />
        </Pressable>
        <Pressable onPress={changeSelection(1)}>
          <Image style={styles.tabIcon} source={Translate} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 20,
    backgroundColor: '#82AAE3',
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      height: -6,
      width: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
});

export default App;
