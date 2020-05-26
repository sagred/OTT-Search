import React from 'react'
import {View ,Text ,StyleSheet ,TextInput,TouchableHighlight} from 'react-native'
function Search ({ text, search, s, clearSearch }) {


    return (
        <View style = {styles.searchBox}>
                <TextInput 
                    style = {styles.search}
                    onChangeText = {text}
                    placeholder = 'Search for a movie...'
                    placeholderTextColor = "#707070"
                    onSubmitEditing = {search}
                    value = {s}
                />
                {s?
                    <TouchableHighlight>
                        <Text style = {styles.close} onPress = {clearSearch}>X</Text>
                    </TouchableHighlight>
                    :null
                }
            </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        width :'100%',
        backgroundColor: '#2e2e2e',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    search: {
      marginLeft: 30,  
      color: 'white'
     },
    close: {
        color:'white',
        fontWeight:'400',
        fontSize:16,
        margin:13,
        marginLeft:160
    }
})

export default Search

