import { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import contractJSON from '../artifacts/contracts/Famtree.sol/Famtree.json'

const Auth = createContext({});

export const AuthProvider = ({ children }) => {
	
    const [isWalletInstalled, setIsWalletInstalled] = useState(false);
    // state for keeping track of current connected account.
    const [account, setAccount] = useState(localStorage.getItem("account"));
    
    useEffect(() => {
        if (window.ethereum) {
            setIsWalletInstalled(true);
        }
    }, []);
    
    async function connectWallet() {
        window.ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((accounts) => {
                setAccount(accounts[0]);
				localStorage.setItem("account", accounts[0])
            })
            .catch((error) => {
                alert("Something went wrong");
            });
    }

//accessing smart contracts
    const contractABI = contractJSON.abi;
    const {ethereum} = window;
    const contractAddress = "0xf9d7dE0eC6E2fe5d24811066c20b5568EdEFB7c5";
    var contract;

    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();

        contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        ); 
      }
     //MaleName,FemaleName,genNo,DOB,Record Date,FatherName

    // const tx1 = await AddDate.createPerson("Siddharth","Janvi",1,"1/9/2002",100000000,"Atulbhai");
    // await tx1.wait();
    // console.log("Data = ", await AddDate.getData());

    const position = { x: 0, y: 0 };
    var initialNodes = []
    var initialEdges = []

    const data = async () => {
      const famData = await contract.getData()
      console.log(famData);
      for(var i = 0; i < famData.length; i++) {
          
        initialNodes.push({
          id: `${i}`,
          data: { label: (
            <>
              {famData[i][0]}   
            </>
          ), },
          position,
        })
      }

      return {initialNodes, initialEdges}
    }
	
	return (
		<Auth.Provider
			value={{
				account, setAccount, 
				isWalletInstalled, setIsWalletInstalled,
				connectWallet,
                contract,
                data
			}}
		>
		{children}
		</Auth.Provider>
	);
};

export default Auth;
