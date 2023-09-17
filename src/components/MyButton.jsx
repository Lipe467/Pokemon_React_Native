import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

const MyButton = ({title,background,onPressButton}) => {

    const styles = StyleSheet.create({
        container: {
            alignItems:'center',
            textAlign:'center',
            verticalAlign:'auto',
            borderRadius: 8,
            height:30,
            justifyContent: 'center'
        
        }
    })
    return (
        <SafeAreaView>
            <TouchableOpacity style={{backgroundColor: background, ...styles.container}} onPress={onPressButton}>
                <Text>{title}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default MyButton;