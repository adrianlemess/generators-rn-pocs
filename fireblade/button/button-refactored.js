import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Prancheta1 from './Button';
import { TouchableHighlight } from 'react-native';
import Svg, { Path as SvgPath } from 'react-native-svg';

export default function App() {
  return (
    <View style={styles.container}>
        <TouchableHighlight style={styles.prancheta1}> 
          <View data-layer="c2e4d623-6c30-4574-9927-40ece723118e" style={styles.prancheta1_button}>
            <View data-layer="689e5778-03e3-48e9-ad0d-2a79225c911b" style={styles.prancheta1_button_defaultstate}>
              <View data-layer="8704b2b2-005a-4e35-a7a5-688700df404c" style={styles.prancheta1_button_defaultstate_backgroundb4a6c974}></View>
              <Text data-layer="988f66ed-924b-4914-92d5-4d1fd0738271" style={styles.prancheta1_button_defaultstate_textc8a12407}>Card button</Text>
              <Svg data-layer="a01b611f-fc0d-4bee-b4b3-b5684e8f4518" style={styles.prancheta1_button_defaultstate_elipse459} preserveAspectRatio="none" viewBox="-0.75 -0.75 9.5 9.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 4 0 C 6.209138870239258 0 8 1.790861129760742 8 4 C 8 6.209138870239258 6.209138870239258 8 4 8 C 1.790861129760742 8 0 6.209138870239258 0 4 C 0 1.790861129760742 1.790861129760742 0 4 0 Z" /></Svg>
            </View>
          </View>
        </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  "prancheta1": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 427,
    "height": 128,
    "left": 0,
    "top": 0
  },
  "prancheta1_button": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 328,
    "height": 40,
    "left": 50,
    "top": 44
  },
  "prancheta1_button_activestate": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 334,
    "height": 334,
    "left": -3,
    "top": -147
  },
  "prancheta1_button_activestate_background": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(25, 29, 34, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 20,
    "borderTopRightRadius": 20,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.25098039215686274,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 10,
    "width": 328,
    "height": 40,
    "left": 3,
    "top": 147
  },
  "prancheta1_button_activestate_text": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 0.8705882352941177)",
    "fontSize": 13,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "normal",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 72,
    "height": 16,
    "left": 131,
    "top": 158.5
  },
  "prancheta1_button_activestate_elipse460": {
    "opacity": 0.1599999964237213,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 334,
    "height": 334,
    "left": 0,
    "top": 0
  },
  "prancheta1_button_defaultstate": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 328,
    "height": 40,
    "left": 0,
    "top": 0
  },
  "prancheta1_button_defaultstate_backgroundb4a6c974": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(25, 29, 34, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 20,
    "borderTopRightRadius": 20,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.25098039215686274,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 15,
    "width": 328,
    "height": 40,
    "left": 0,
    "top": 0
  },
  "prancheta1_button_defaultstate_textc8a12407": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 0.8705882352941177)",
    "fontSize": 13,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "normal",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 72,
    "height": 16,
    "left": 128,
    "top": 11.5
  },
  "prancheta1_button_defaultstate_elipse459": {
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 8,
    "height": 8,
    "left": 160,
    "top": 16
  }
});
