import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView, Pressable, Alert, View, Modal, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../colors/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/utils/customHeaderButton/CustomHeaderButton';
import GraphContainer from '../../components/GraphContainer/GraphContainer';

interface IProps {
    navigation: StackNavigationProp<any, any>
}

const SummaryScreen = (props: IProps) => {
    const [open, setopen] = useState(false);
    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    color={Colors.white}
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        // @ts-ignore
                        props.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        })
    });
    return <ScrollView>
        <View style={styles.cardsContainer}>
            <TouchableOpacity style={styles.card}>
                <Ionicons name="trending-up-outline" size={30} color={Colors.primary} />
                <Text style={{
                    color: Colors.tertiary
                }}>Summary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <Ionicons name="cash-outline" size={30} color={Colors.secondary} />
                <Text style={{
                    color: Colors.tertiary
                }}>Revenue</Text>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 15,
                    marginBottom: 5
                }}>sh 1,041,350</Text>
                <Text style={{
                    color: 'red'
                }}>-17.32 %</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <Ionicons name="code-slash-outline" size={30} color={Colors.accent} />
                <Text>Transactions</Text>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 15,
                    marginBottom: 5
                }}>1,234</Text>
                <Text style={{
                    color: 'green'
                }}>17 %</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <Ionicons name="people-outline" size={30} color={Colors.tertiary} />
                <Text>Customers</Text>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 15,
                    marginBottom: 5
                }}>10,234</Text>
                <Text style={{
                    color: 'green'
                }}>10 %</Text>
            </TouchableOpacity>

        </View>
        <View>
            <View style={styles.graphHeader}>
                <TouchableOpacity style={styles.periodPicker} onPress={() => setopen(!open)}>
                    <Text>Last 30 Days - Weekly Analysis</Text>
                </TouchableOpacity>
                <Text style={styles.graphTitle}>Your Businass at a glance.</Text>
            </View>
            <GraphContainer />
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: 200,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#00000000',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    headerText: {
        color: Colors.accent,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'right',
        // margin: 20,
    },
    nextText: {
        color: Colors.white,
    },
    rightAlign: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    graphContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    graphHeader: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    graphTitle: {
        marginTop: 6,
        fontSize: 18,
        fontWeight: "600"
    },
    periodPicker: {
        justifyContent: 'center',
        width: 250,
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
        backgroundColor: '#00000000',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
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
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    card: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        width: 170,
        borderWidth: 1,
        borderColor: Colors.primary
    }
})

export default SummaryScreen;