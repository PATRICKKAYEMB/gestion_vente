import { useEffect } from "react";
import AppNav from "./src/Navigation/AppNav";

import * as splashScreen  from "expo-splash-screen"


splashScreen.preventAutoHideAsync()



export default function App() {

  useEffect(()=>{
    const prepare = async()=>{
      await new Promise (resolve => setTimeout(resolve,2000))
      await  splashScreen.hideAsync()
      
    }
    prepare()

  },[])

  return (
   
  <AppNav/>
  );
}




