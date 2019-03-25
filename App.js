import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  handlePressAddArticle = () => {
    Alert.alert('Touché');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Aucun article</Text>
        <Button
          onPress={this.handlePressAddArticle}
          title="Ajouter un article"
        />
      </View>
    );
  }
}
