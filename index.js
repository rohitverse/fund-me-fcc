import {ethers} from "./ethers-5.6.esm.min" ;
import {abi,contractAddress} from "./constants"

const connectButton=document.getElementById("connectButton");
const withdrawButton=document.getElementById("withdrawButton")
const fundButton=document.getElementById("fundButton")
const balanceButton=document.getElementById("balanceButton")



    async () => {
        if (typeof window.ethereum !== "undefined") {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            document.getElementById("connectButton").innerHTML = ("Connected")

        } else {
            document.getElementById("connectButton").innerHTML = ("Please Install Metamask")
        }
    }