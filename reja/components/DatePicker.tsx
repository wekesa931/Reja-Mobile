import React, { useState } from "react";
import { Modal, StyleSheet, Text, Dimensions, View, TouchableOpacity } from "react-native";
import Colors from "../colors/Colors";

const deviceWidth = Dimensions.get("window").width

const DatePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={{ 
                    flexDirection: 'row',
                }}>
                <View>
                    <Text style={{ 
                        borderColor: 'red',
                        borderWidth: 2
                    }}>Period of Analysis</Text>
                    <View>
                        <TouchableOpacity style={{ 
                            borderColor: 'red',
                            borderWidth: 2
                        }}>
                            <Text>Last 30 days</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ 
                            borderColor: 'red',
                            borderWidth: 2
                        }}>
                            <Text>Last 90 days</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={{ 
                        borderColor: 'red',
                        borderWidth: 2
                    }}>Span of Analysis</Text>
                    <View>
                        <TouchableOpacity style={{ 
                            borderColor: 'red',
                            borderWidth: 2
                        }}>
                            <Text>Daily Analysis</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ 
                            borderColor: 'red',
                            borderWidth: 2
                        }}>
                            <Text>Weekly Analysis</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{...styles.periodPicker, width: 200 }} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{ color: Colors.white }}>Select Period</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <TouchableOpacity style={styles.periodPicker} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={{ color: Colors.white }}>Last 30 Days - Weekly Analysis</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width: deviceWidth,
    borderColor: 'red',
    borderWidth: 2
    // marginTop: 22
  },
  modalView: {
    width: deviceWidth - 70,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 15,
    // paddingVertical: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  periodPicker: {
    justifyContent: 'center',
    width: 250,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
        height: 1,
        width: 1
    }
},
});

export default DatePicker;