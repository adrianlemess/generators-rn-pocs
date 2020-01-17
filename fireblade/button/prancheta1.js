import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class Prancheta1 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="b41db8c4-5bef-4e24-be0a-6f713253b6f2" style={styles.prancheta1}>
        <View data-layer="abe26dff-f707-4a55-9fd2-dfba0c64d7a4" style={styles.prancheta1_button}>
            <View data-layer="139c0759-3d3b-43c7-a537-a3f3b70082de" style={styles.prancheta1_button_background}></View>
            <Text data-layer="1b7627c1-8240-4d0b-ad6f-f3d9531e877a" style={styles.prancheta1_button_cardbutton}>Card button</Text>
        </View>
    </ScrollView>
    );
  }
}

Prancheta1.propTypes = {

}

Prancheta1.defaultProps = {

}


const styles = StyleSheet.create({
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
  "prancheta1_button_background": {
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
  "prancheta1_button_cardbutton": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 0.8705882352941177)",
    "fontSize": 13,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "encode-sans",
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
  }
});