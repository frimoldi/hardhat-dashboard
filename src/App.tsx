import React from "react"
import { Container, Flex } from "@chakra-ui/react"

import logo from "./logo.svg"
import "./App.css"

function App() {
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
            Current block:
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default App
