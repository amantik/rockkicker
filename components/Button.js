import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];

    return (
      <View
        style={{
          width: this.props.size,
          height: this.props.size,
          backgroundColor: "blue",
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <Text 
          style={styles.titleText}
        >
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    flex: 1,
    color: "#9999ff",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});