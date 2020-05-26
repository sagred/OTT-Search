import React from 'react'
import {View ,Text ,StyleSheet ,Image ,ScrollView ,TouchableHighlight} from 'react-native'

function List ( {data, openPopup}) {
    return (
        <View>
            <ScrollView style = {styles.app}>

                <Text style ={styles.number}>TV SHOWS & MOVIES: {data.length}</Text>

                <View style = {styles.content}>
                {data.map(result => {
                    return(
                        <TouchableHighlight 
                            key={result.id} 
                            onPress={() => openPopup(result.id)}
                        >
                            <View >

                                <Image 
                                    source = {{ uri: result.poster_240x342}}
                                    style = {{
                                        width: 114,
                                        height: 180,
                                        marginBottom:8,
                                        marginLeft: 2,
                                        marginRight: 2
                                    }}
                                    alt = {result.title}
                                />
                                
                            </View>
                        </TouchableHighlight>
                    )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171717',
      color: 'white'
    },
    search: {
      width: '100%',
      color: 'white',
      backgroundColor: '#2e2e2e',
    },
    number:{
        color:'white',
        fontSize: 16,
        fontWeight: '700',
        margin: 20,
        marginLeft:0
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default List