import React, { useCallback, useEffect, useState } from "react"
import { Button, Container, Flex, Text, VStack } from "@chakra-ui/react"

import { useProvider } from "./hooks/useProvider"
import { useLatestBlock } from "./hooks/useLatestBlock"

function App() {
  const provider = useProvider()
  const latestBlock = useLatestBlock()

  const handleMineNewBlockClick = useCallback(() => {
    provider.send("evm_mine", [])
  }, [provider])

  return (
    <Flex
      background="orange"
      align="center"
      justify="space-evenly"
      height="100vh"
    >
      <Container padding={0}>
        <Flex direction="column" gap={10}>
          <Flex
            background="white"
            borderRadius={20}
            padding={5}
            justify="center"
          >
            {latestBlock && (
              <VStack>
                <Text>{`Block # ${latestBlock.number}`}</Text>
                <Text>{`Timestamp ${latestBlock.timestamp}`}</Text>
              </VStack>
            )}
          </Flex>
          <Button onClick={handleMineNewBlockClick}>Mine new block</Button>
        </Flex>
      </Container>
    </Flex>
  )
}

export default App
