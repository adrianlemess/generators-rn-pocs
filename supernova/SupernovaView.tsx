//
// ConfiguracoesDePagamento
// Poc supernova
//
// Created by .
// Copyright © 2018 . All rights reserved.
//

import React from "react"
import { TouchableOpacity, TextInput, Image, View, StyleSheet, Text } from "react-native"

export default class ConfiguracoesDePagamento extends React.Component {

    static navigationOptions = ({ navigation }) => {

        const { params = {} } = navigation.state
        return {
            header: null,
            headerLeft: null,
            headerRight: null,
        }
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    onPrimaryButtonPressed = () => {

    }

    render() {

        return <View
            style={styles.viewView}>
            <View
                style={styles.grupo324View}>
                <View
                    style={styles.retangulo1325View} />
                <View
                    pointerEvents="box-none"
                    style={{
                        height: 56,
                    }}>
                    <View
                        style={styles.retangulo1326View} />
                    <View
                        pointerEvents="box-none"
                        style={{
                            position: "absolute",
                            left: 4,
                            right: 21,
                            top: 12,
                            height: 32,
                            flexDirection: "row",
                            alignItems: "flex-start",
                        }}>
                        {/* <Image
                            source={require("./../assets/images/arrow---grey---icon.png")}
                            style={styles.arrowGreyIconImage} /> */}
                        <Text
                            style={styles.instalacaoText}>INSTALAÇÃO</Text>
                        <View
                            style={{
                                flex: 1,
                            }} />
                        {/* <Image
                            source={require("./../../assets/images/grupo-de-mscara-1.png")}
                            style={styles.grupoDeMascara1Image} /> */}
                    </View>
                </View>
            </View>
            <View
                style={styles.progressBarView}>
                <Text
                    style={styles.passo10De10ConText}>Passo 10 de 10 – Configure as opções de pagamento</Text>
                <View
                    style={{
                        flex: 1,
                    }} />
                <View
                    pointerEvents="box-none"
                    style={{
                        alignSelf: "stretch",
                        height: 9,
                    }}>
                    <View
                        style={styles.totalView} />
                    <View
                        style={styles.currentView} />
                </View>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    flex: 1,
                    marginLeft: 8,
                    marginTop: 13,
                    marginBottom: 7,
                }}>
                <View
                    style={styles.cardView} />
                <View
                    pointerEvents="box-none"
                    style={{
                        position: "absolute",
                        alignSelf: "center",
                        width: 371,
                        top: 21,
                        bottom: 17,
                        alignItems: "center",
                    }}>
                    <Text
                        style={styles.opcoesDePagamentoText}>OPÇÕES DE PAGAMENTO</Text>
                    <View
                        style={styles.divisoriaView} />
                    <View
                        style={styles.regularTextInputView}>
                        <Text
                            style={styles.valorDoComodatoText}>Valor do comodato</Text>
                        <TextInput
                            keyboardType="phone-pad"
                            returnKeyType="next"
                            autoCorrect={false}
                            placeholder="R$ 00,00"
                            style={styles.grupo2TextInput} />
                    </View>
                    <View
                        style={styles.dropdownView}>
                        <Text
                            style={styles.parcelamentoText}>Parcelamento</Text>
                        <View
                            style={styles.grupo20View}>
                            <Text
                                style={styles.xDeR0000Text}>1x de R$ 00,00</Text>
                            <View
                                style={{
                                    flex: 1,
                                }} />
                            {/* <Image
                                source={require("./../../assets/images/mini-arrow-shack.png")}
                                style={styles.miniArrowShackImage} /> */}
                        </View>
                    </View>
                    <View
                        style={styles.dropdownTwoView}>
                        <Text
                            style={styles.mensalidadeText}>Mensalidade</Text>
                        <View
                            style={styles.grupo20TwoView}>
                            <Text
                                style={styles.r0000SemPgoText}>R$ 00,00 – Sem PGO</Text>
                            <View
                                style={{
                                    flex: 1,
                                }} />
                            {/* <Image
                                source={require("./../../assets/images/mini-arrow-shack.png")}
                                style={styles.miniArrowShackTwoImage} /> */}
                        </View>
                    </View>
                    <View
                        style={styles.regularTextInputTwoView}>
                        <Text
                            style={styles.valorDoComodatoTwoText}>Dia de vencimento</Text>
                        <TextInput
                            keyboardType="phone-pad"
                            returnKeyType="next"
                            autoCorrect={false}
                            placeholder="Dia do mês em que a mensalidade vence"
                            style={styles.grupo2TwoTextInput} />
                    </View>
                    <View
                        style={styles.regularTextInputThreeView}>
                        <Text
                            style={styles.valorDoComodatoThreeText}>Valor do comodato</Text>
                        <TextInput
                            keyboardType="phone-pad"
                            returnKeyType="next"
                            autoCorrect={false}
                            placeholder="Rua ou avenida, número e complemento"
                            style={styles.grupo2ThreeTextInput} />
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }} />
                    <TouchableOpacity
                        onPress={this.onPrimaryButtonPressed}
                        style={styles.primaryButtonButton}>
                        <Text
                            style={styles.primaryButtonButtonText}>CONCLUIR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    }

}

const styles = StyleSheet.create({
    viewView: {
        backgroundColor: "rgb(236, 237, 242)",
        flex: 1,
    },
    grupo324View: {
        backgroundColor: "transparent",
        height: 80,
    },
    retangulo1325View: {
        backgroundColor: "white",
        height: 24,
    },
    retangulo1326View: {
        backgroundColor: "white",
        shadowColor: "rgba(0, 0, 0, 0.16)",
        shadowRadius: 4,
        shadowOpacity: 1,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: 56,
    },
    arrowGreyIconImage: {
        backgroundColor: "transparent",
        resizeMode: "center",
        width: 32,
        height: 32,
    },
    instalacaoText: {
        backgroundColor: "transparent",
        color: "rgb(58, 101, 158)",
        fontFamily: "normal",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: 4,
        marginTop: 6,
    },
    grupoDeMascara1Image: {
        backgroundColor: "transparent",
        resizeMode: "center",
        width: 18,
        height: 24,
        marginTop: 4,
    },
    progressBarView: {
        backgroundColor: "transparent",
        height: 29,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 10,
        alignItems: "flex-start",
    },
    passo10De10ConText: {
        color: "rgb(128, 172, 224)",
        fontFamily: "EncodeSans-Medium",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        backgroundColor: "transparent",
        marginLeft: 8,
    },
    totalView: {
        backgroundColor: "rgb(196, 219, 243)",
        borderRadius: 4.5,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 9,
    },
    currentView: {
        backgroundColor: "rgb(128, 172, 224)",
        borderRadius: 4.5,
        position: "absolute",
        left: 0,
        width: 309,
        bottom: 0,
        height: 9,
    },
    cardView: {
        backgroundColor: "white",
        borderRadius: 4,
        shadowColor: "rgba(0, 0, 0, 0.16)",
        shadowRadius: 4,
        shadowOpacity: 1,
        position: "absolute",
        left: 0,
        right: 42,
        top: 0,
        height: 526,
    },
    opcoesDePagamentoText: {
        color: "rgb(58, 101, 158)",
        fontFamily: "normal",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "bold",
        textAlign: "left",
        backgroundColor: "transparent",
    },
    divisoriaView: {
        backgroundColor: "rgb(215, 216, 220)",
        width: 314,
        height: 2,
        marginTop: 20,
    },
    regularTextInputView: {
        backgroundColor: "transparent",
        width: 312,
        height: 58,
        marginTop: 19,
    },
    valorDoComodatoText: {
        backgroundColor: "transparent",
        color: "rgb(101, 105, 117)",
        fontFamily: "EncodeSans-Medium",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        alignSelf: "flex-start",
    },
    grupo2TextInput: {
        color: "rgb(101, 105, 117)",
        fontFamily: "EncodeSans-Regular",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        backgroundColor: "white",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "rgb(215, 216, 220)",
        borderStyle: "solid",
        paddingLeft: 16,
        paddingTop: 9,
        paddingBottom: 10,
        height: 36,
        marginTop: 5,
    },
    dropdownView: {
        backgroundColor: "transparent",
        width: 312,
        height: 58,
        marginTop: 18,
    },
    parcelamentoText: {
        color: "rgb(101, 105, 117)",
        fontFamily: "EncodeSans-Medium",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        backgroundColor: "transparent",
        alignSelf: "flex-start",
    },
    grupo20View: {
        backgroundColor: "white",
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "rgb(215, 216, 220)",
        borderStyle: "solid",
        height: 36,
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    xDeR0000Text: {
        color: "rgb(101, 105, 117)",
        fontFamily: "EncodeSans-Regular",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        backgroundColor: "transparent",
        marginLeft: 16,
    },
    miniArrowShackImage: {
        backgroundColor: "transparent",
        resizeMode: "center",
        width: 10,
        height: 6,
        marginRight: 14,
    },
    dropdownTwoView: {
        backgroundColor: "transparent",
        width: 312,
        height: 58,
        marginTop: 18,
        alignItems: "flex-start",
    },
    mensalidadeText: {
        color: "rgb(101, 105, 117)",
        fontFamily: "EncodeSans-Medium",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        backgroundColor: "transparent",
    },
    grupo20TwoView: {
        backgroundColor: "white",
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "rgb(215, 216, 220)",
        borderStyle: "solid",
        alignSelf: "stretch",
        height: 36,
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    r0000SemPgoText: {
        color: "rgb(101, 105, 117)",
        fontFamily: "EncodeSans-Regular",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        backgroundColor: "transparent",
        marginLeft: 16,
    },
    miniArrowShackTwoImage: {
        resizeMode: "center",
        backgroundColor: "transparent",
        width: 10,
        height: 6,
        marginRight: 14,
    },
    regularTextInputTwoView: {
        backgroundColor: "transparent",
        width: 312,
        height: 58,
        marginTop: 18,
        alignItems: "flex-start",
    },
    valorDoComodatoTwoText: {
        color: "rgb(101, 105, 117)",
        fontFamily: "EncodeSans-Medium",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        backgroundColor: "transparent",
    },
    grupo2TwoTextInput: {
        color: "rgb(101, 105, 117)",
        fontFamily: "EncodeSans-Regular",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        backgroundColor: "white",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "rgb(215, 216, 220)",
        borderStyle: "solid",
        paddingLeft: 16,
        paddingTop: 9,
        paddingBottom: 10,
        alignSelf: "stretch",
        height: 36,
        marginTop: 5,
    },
    regularTextInputThreeView: {
        backgroundColor: "transparent",
        width: 312,
        height: 58,
        marginTop: 18,
        alignItems: "flex-start",
    },
    valorDoComodatoThreeText: {
        backgroundColor: "transparent",
        color: "rgb(101, 105, 117)",
        fontFamily: "EncodeSans-Medium",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
    },
    grupo2ThreeTextInput: {
        color: "rgb(101, 105, 117)",
        fontFamily: "EncodeSans-Regular",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        backgroundColor: "white",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "rgb(215, 216, 220)",
        borderStyle: "solid",
        paddingLeft: 16,
        paddingTop: 9,
        paddingBottom: 10,
        alignSelf: "stretch",
        height: 36,
        marginTop: 5,
    },
    primaryButtonButtonImage: {
        resizeMode: "contain",
        marginRight: 10,
    },
    primaryButtonButton: {
        backgroundColor: "rgb(58, 101, 158)",
        borderRadius: 18,
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowRadius: 4,
        shadowOpacity: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        width: 313,
        height: 36,
    },
    primaryButtonButtonText: {
        color: "white",
        fontFamily: "EncodeSans-Medium",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "center",
    },
})