import { ethers } from "ethers"
import { useMemo } from "react"

export const useProvider = () => {
  return useMemo(() => {
    return new ethers.providers.JsonRpcProvider("http://localhost:8545")
  }, [])
}
