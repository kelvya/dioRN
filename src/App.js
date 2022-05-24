import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Text,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const ImageProfileGithub =
    'https://avatars.githubusercontent.com/u/99570969?v=4';
const urlToMyGithub = 'https://github.com/kelvya';
const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando Link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log('Link aprovado');
            console.log('Abrindo link....');
            await Linking.openURL(urlToMyGithub);
        }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
                <Image
                    accessibilityLabel='Kelvya sorrindo com uma parede branca de fundo'
                    style={style.avatar}
                    source={{ uri: ImageProfileGithub }}
                />
                <Text
                    accessibilityLabel='Nome: Kelvya Thais'
                    style={[style.defaultText, style.name]}>
                    Kelvya Thais
                </Text>
                <Text
                    accessibilityLabel='Nickname: kelvya'
                    style={[style.defaultText, style.nickname]}>
                    kelvya
                </Text>
                <Text
                    accessibilityLabel='Descrição: Estudande de Engenharia de Softwares,
                     Dio Campus Expert'
                    style={[style.defaultText, style.description]}>
                    Estudande de Engenharia de Softwares
                    Dio Campus Expert
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
