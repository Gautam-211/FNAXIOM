import { setToken , setLoggedIn} from "../../slices/authSlice"
import { apiConnector } from "../apiconnector";
import {auth} from "../apis"


const {
    SIGNUP_API,
    LOGIN_API,
  } = auth

export function login(email, password, navigate) {
    return async (dispatch) => {
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        dispatch(setToken(response.data.token))
        dispatch(setLoggedIn(true))
        // dispatch(setUser({ ...response.data.user, image: userImage }))
        
        localStorage.setItem("token", JSON.stringify(response.data.token))
        // localStorage.setItem("user", JSON.stringify(response.data.user))
        navigate("/")

      } catch (error) {
        console.log("LOGIN API ERROR............", error)
      }
      
    }
  }

  export function signup(data, navigate) {
    return async (dispatch) => {
      try {
        const response = await apiConnector("POST", SIGNUP_API, data)
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        // dispatch(setToken(response.data.token))
        // dispatch(setLoggedIn(true))
        // dispatch(setUser({ ...response.data.user, image: userImage }))
        dispatch(setLoggedIn(true))
        
        localStorage.setItem("token", JSON.stringify(response.data.token))
        // localStorage.setItem("user", JSON.stringify(response.data.user))
        navigate("/")
        alert("Account created, now login")

      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
      }
      
    }
  }