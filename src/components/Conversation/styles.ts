import {Dimensions, StyleSheet} from 'react-native';

export const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#91D8E4',
    width: WIDTH - 40,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#EAFDFC',
    paddingHorizontal: 14,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
    shadowColor: '#82AAE3',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  loader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 999,
    backgroundColor: '#fffc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 140,
    width: WIDTH,
  },
  sent: {
    backgroundColor: '#04DE71',
    alignSelf: 'flex-end',
  },
  received: {
    backgroundColor: '#2094FA',
    alignSelf: 'flex-start',
  },
  chatBubble: {
    borderRadius: 20,
    paddingVertical: 12,
    marginBottom: 8,
    maxWidth: WIDTH / 2 + 80,
    paddingHorizontal: 16,
  },
  msgText: {
    fontWeight: '500',
    color: '#FFF',
    letterSpacing: 0.2,
  },
  typingLoader: {
    width: 80,
    height: 20
  }
});
