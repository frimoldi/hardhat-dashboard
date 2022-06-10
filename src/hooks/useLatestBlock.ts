import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { useProvider } from "./useProvider"

export const useLatestBlock = () => {
  const provider = useProvider()
  const [latestBlock, setLatestBlock] = useState<ethers.providers.Block>()

  useEffect(() => {
    ;(async function async() {
      const blockNumber = await provider.getBlockNumber()
      const block = await provider.getBlock(blockNumber)

      setLatestBlock(block)
    })()
  }, [provider])

  return latestBlock
}
