import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    paddingTop: 18,
    fontStyle:'italic',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
});

const Message = ({startSeconds, seconds}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {seconds < startSeconds/2 && seconds !== 0 ? 'More than halfway there!' : ''}
        {seconds === 0 && startSeconds !== 0 ? 'Time’s up!' : ''}
      </Text>
    </View>
  );
}

const mapStateToProps = state => ({
  startSeconds: state.countdown.startSeconds,
  seconds: state.countdown.seconds,
});

export default connect(mapStateToProps)(Message);
