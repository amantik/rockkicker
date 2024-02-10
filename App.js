import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Constants from "./Constants";
import Player from "./components/Player";
import Button from "./components/Button";
import { GameLoop } from "./GameLoop";

export default function App() {
  return (
    <View style={styles.container}>
      <GameEngine
        style={styles.gameCanvas}
        systems={[GameLoop]}
        entities={{
          player: {
            position: [0, 0],
            size: Constants.CELL_SIZE,
            renderer: <Player />,
          },
          button_up: {
            position: [125, 350],
            size: 3*Constants.CELL_SIZE,
            text: "UP",
            renderer: <Button />,
          },
          button_down: {
            position: [125, 420],
            size: 3*Constants.CELL_SIZE,
            text: "DOWN",
            renderer: <Button />,
          },
        }}
      ></GameEngine>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  gameCanvas: {
    flex: null,
    width: 0.8 * Math.min(Constants.MAX_WIDTH, Constants.MAX_HEIGHT),
    height: 0.8 * Math.min(Constants.MAX_WIDTH, Constants.MAX_HEIGHT),
    backgroundColor: "#fff",
  },
});
