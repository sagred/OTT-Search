import React  from 'react'
import {View ,Text ,StyleSheet ,Image ,TouchableHighlight ,Modal ,Linking} from 'react-native'

function Content ({ selected, closePopup }) {
    
    return (
        <Modal
				animationType='slide'
				transparent={false}
        visible={(typeof selected.title != 'undefined')}
		>
      
            <View style = {styles.container}>

                <View style = {styles.imageBox}>
                  <Image 
                    blurRadius={ Platform.OS == 'ios' ? 10 :10 }
                    source={{uri:selected.poster_240x342}} 
                    style={styles.blurimage}
                  />
                </View>

                <View style = {styles.viewImage}>
                  <Image 
                      source={{uri:selected.poster_240x342}} 
                      style={styles.image}
                    />
                </View>

                <View style = {styles.titleBox}>
                <Text style={styles.title}>{selected.title}</Text>
                </View>
                
                {selected.subscription_android_sources != undefined && 
                  <View>
                    {selected.subscription_android_sources.map(s =>{
                      return (
                        <View key = {s.app_link} style ={styles.playBox}>
                          <View style = {styles.playButton}>
                            <Text style = {styles.play} onPress={() => Linking.openURL(s.link)} >Play</Text>
                          </View>
                        </View>
                      )
                    })}
                  </View>
                }
              
                
                <Text style = {styles.overview}>{selected.overview} </Text>

                <Text style = {{marginBottom:20}}>{selected.display_name}</Text>
                {selected.subscription_android_sources != undefined && 
                  <View>
                    {selected.subscription_android_sources.map(s =>{
                      return (
                        <Text key ={s.app_link} style = {styles.source}>Available on:{s.display_name}</Text>
                      )
                    })}
                  </View>
                }
            
            <TouchableHighlight
              onPress = {closePopup}
              style = {styles.closeBox}
            > 
                <Text style = {styles.close}>Close</Text>
            </TouchableHighlight>
          </View>
                   
      </Modal>
    )
}



const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#0a0a0a',
    },
    imageBox:{
      position:'absolute',

    },
    blurimage: {
      width: 360,
      height: 720,
      
    },
    viewImage:{
      justifyContent:'center',
      alignItems:'center'
    },
    image:{
      width:140,
      height:200,
      marginTop:15
    },
    titleBox:{
      justifyContent:'center',
      alignItems:'center',
      margin:10
    },
    title:{
      color:'white',
      fontSize:18,
      fontWeight:'700'
    },
    playBox:{
      alignItems:'center'
    },
    playButton:{
      alignItems:'center',
      backgroundColor:'white',
      width:120,
      borderRadius:4,
    },
    play:{
      
      fontSize:24,
      alignContent:'center',
      fontWeight:'700',
      
      
      justifyContent:'center'
    },
    overview:{
      color:'#000000',
      fontWeight:'300',
      marginTop:20
    },
    closeBox:{
      width:75,
      marginLeft:5,
      alignItems:'center',
      backgroundColor:'white',
      borderRadius:5,
      marginTop:20
    },
    close:{
      
      fontSize:24,
      fontWeight:'700',
    },
    source:{
      fontWeight:'700',
      color:'white'
    }
})

export default Content