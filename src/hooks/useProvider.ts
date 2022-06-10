import { ethers } from "ethers"

export const useProvider = () => {
  return new ethers.providers.JsonRpcProvider("http://localhost:8545")
}
