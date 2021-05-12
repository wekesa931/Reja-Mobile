import React, { useState } from "react";
import { Modal, StyleSheet, Text, Dimensions, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { spans, periods, mappedValues } from '../utils/models'
import Colors from "../colors/Colors";
import { setPeriod } from "../redux/actions/periodPicker";
import { RootState } from "../redux/reducers";
import { color } from "react-native-reanimated";

const deviceWidth = Dimensions.get("window").width

const activeStyle = (isActive: boolean) => {
  let activeStyle = {
    backgroundColor: Colors.white,
    color: 'black'
  }
 if(isActive){
  activeStyle = {
    backgroundColor: Colors.primary,
    color: Colors.white
  }
 }
 return activeStyle
}

const SpanPicker = (props: { isActive: boolean, type: string, label: string, onChange: (value: string) => void, value: string }) => {
  return <TouchableOpacity style={{...styles.spans, backgroundColor: activeStyle(props.isActive).backgroundColor}}
        onPress={() => props.onChange(props.value)}
        >
            <Text style={{ color: activeStyle(props.isActive).color}}>{props.label}</Text>
        </TouchableOpacity>
}

const PeriodPicker = (props: { isActive: boolean, type: string, label: string, onChange: (value: string) => void, value: string }) => {
  return <TouchableOpacity style={{...styles.periodSelect, backgroundColor: activeStyle(props.isActive).backgroundColor}}
          onPress={() => props.onChange(props.value)}
        >
            <Text style={{ color: activeStyle(props.isActive).color}}>{props.label}</Text>
        </TouchableOpacity>
}

const DatePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const store = useSelector((state: RootState) => state)
  const { periodReducers } = store
  const [timePeriod, settimePeriod] = useState(periodReducers.period);
  const [timeSpan, settimeSpan] = useState(periodReducers.span );
  const dispatch = useDispatch();

  const resetPeriod = () => {
    dispatch(setPeriod(timePeriod,timeSpan))
    setModalVisible(!modalVisible)
  }
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
                  <View style={{flex: 1}}>
                      <Text style={styles.periods}>Period of Analysis</Text>
                      <View>
                        {periods.map(p => (
                          <React.Fragment key={p.value}>
                            <PeriodPicker
                              isActive={p.value === timePeriod}
                              type={p.type}
                              label={p.label}
                              value={p.value}
                              onChange={(value) => settimePeriod(value)}
                            />
                          </React.Fragment>
                          
                        ))}
                      </View>
                  </View>
                  <View style={{flex: 1}}>
                      <Text style={styles.spanTitle}>Span of Analysis</Text>
                      <View>
                        {spans.map(p => (
                          <React.Fragment key={p.value}>
                            <SpanPicker
                              isActive={p.value === timeSpan}
                              type={p.type}
                              label={p.label}
                              value={p.value}
                              onChange={(value) => settimeSpan(value)}
                            />
                          </React.Fragment>
                            
                          ))}
                      </View>
                  </View>
            </View>
            <TouchableOpacity style={{...styles.periodPicker, width: 200 }} onPress={() => resetPeriod()}>
                <Text style={{ color: Colors.white }}>Select Period</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <TouchableOpacity style={styles.periodPicker} onPress={() => setModalVisible(!modalVisible)}>
          {/* @ts-ignore */}
            <Text style={{ color: Colors.white }}>Last {mappedValues[timeSpan]} - {mappedValues[timePeriod]}</Text>
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
    // marginTop: 22
  },
  modalView: {
    width: deviceWidth - 70,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
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
  periodSelect: { 
    borderBottomWidth: 2,
    borderRightColor: '#ece4e4',
    borderRightWidth: 1,
    borderBottomColor: '#ece4e4',
    paddingLeft: 5,
    height: 40,
    justifyContent: "center"
},
  spanTitle: {
    height: 50,
    fontWeight: 'bold',
    textAlign: "center",
    paddingTop: 8,
    borderBottomWidth: 2,
    borderLeftColor: '#ece4e4',
    borderLeftWidth: 1,
    borderBottomColor: '#ece4e4'
  },
  spans: { 
    borderBottomWidth: 2,
    borderLeftColor: '#ece4e4',
    borderLeftWidth: 1,
    borderBottomColor: '#ece4e4',
    
    paddingLeft: 5,
    height: 40,
    justifyContent: "center"
  },
  periods: {
    height: 50,
    fontWeight: 'bold',
    textAlign: "center",
    paddingTop: 8,
    borderBottomWidth: 2,
    borderRightColor: '#ece4e4',
    borderRightWidth: 1,
    borderBottomColor: '#ece4e4'
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