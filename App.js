import React, { useState } from 'react';
import {StyleSheet,  View} from 'react-native';
import axios from 'axios'
import Search from './components/Search'
import List from './components/List'
import Content from './components/Content';

function App () {

    const apiurl = "http://api-public.guidebox.com/v2/search?api_key=<YOUR-API-KEY>&type=movie&field=title";

    const [state ,setState] = useState({
        s: '',
        results: [],
        selected: {}
    })

    const text = t => {
        setState(prevState => {
            return {...prevState ,s:t}
        })
    }

    const search = () =>  {
        axios(apiurl + "&query=" + state.s).then(({data}) => {
            let results = data.results;
            if(results != undefined) 
            {
                setState(prevState => {
                    return{...prevState ,results: results}
                })
            }    
        })
    } 
        

    const openPopup = id => {
        const api = "http://api-public.guidebox.com/v2/movies/";
        axios(api + id + "<YOUR-API-KEY").then(({ data }) => {
          let result = data;
          if(result != undefined){
            setState(prevState => {
                return{...prevState, selected:result}
              })
          }  
          
        })
      }


    const closePopup = () => setState(prevState => {
        return {...prevState, selected: {} }
      })

    const clearSearch = () => setState(prevState => {
        return {...prevState, s:''}
    })
    return(
        <View style = {styles.container}>
            <Search text = {text} search = {search} s = {state.s} clearSearch = {clearSearch}/>
            <List data = {state.results} openPopup = {openPopup}/>
            <Content selected = {state.selected} closePopup = {closePopup}/>      
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171717',
        color: 'white'
      }
})

export default App