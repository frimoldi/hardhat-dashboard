import React, { useEffect, useState } from "react"
import { Container, Flex } from "@chakra-ui/react"

import { useProvider } from "./hooks/useProvider"

function App() {
  const provider = useProvider()
  const [blockNumber, setBlockNumber] = useState<number>()

  useEffect(() => {
    ;(async function async() {
      const blockNumber = await provider.getBlockNumber()
      setBlockNumber(blockNumber)
    })()
  })

  return (
    <Flex
      background="orange"
      align="center"
      justify="space-evenly"
      height="100vh"
    >
      <Container padding={0}>
        <Flex direction="column" gap={10}>
          <Flex grow={1} background="white" borderRadius={20} padding={5}>
            {blockNumber && `Block # ${blockNumber}`}
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default App
