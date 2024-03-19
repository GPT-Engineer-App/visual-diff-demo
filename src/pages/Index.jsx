import React, { useState } from "react";
import { Box, VStack, Heading, Text, Image, Textarea, Button, Grid, Code, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [diff, setDiff] = useState("");

  const runDiff = () => {
    const lines1 = input1.split("\n");
    const lines2 = input2.split("\n");
    let diffOutput = "";

    lines1.forEach((line, i) => {
      if (lines2[i] !== line) {
        diffOutput += `- ${line}\n+ ${lines2[i]}\n`;
      } else {
        diffOutput += `  ${line}\n`;
      }
    });

    setDiff(diffOutput);
  };

  return (
    <Box>
      <VStack spacing={8} alignItems="center" py={12} px={6}>
        <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwc2ltb24lMjBsaW5kaG9sbXxlbnwwfHx8fDE3MTA4NTA1MTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Simon Lindholm" />
        <Heading as="h1" size="2xl">
          Simon Lindholm
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Software Engineer | Open Source Enthusiast
        </Text>
        <Box>
          <Button as="a" href="https://github.com/simonlindholm" target="_blank" rel="noopener noreferrer" leftIcon={<FaGithub />} mr={4}>
            GitHub
          </Button>
          <Button as="a" href="https://www.linkedin.com/in/simonlindholm/" target="_blank" rel="noopener noreferrer" leftIcon={<FaLinkedin />} mr={4}>
            LinkedIn
          </Button>
          <Button as="a" href="https://twitter.com/simonlindholm" target="_blank" rel="noopener noreferrer" leftIcon={<FaTwitter />}>
            Twitter
          </Button>
        </Box>
      </VStack>

      <Box py={12} px={6}>
        <Heading as="h2" size="xl" mb={6}>
          Visual Diff Demo
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Textarea placeholder="Enter text for input 1" value={input1} onChange={(e) => setInput1(e.target.value)} />
          <Textarea placeholder="Enter text for input 2" value={input2} onChange={(e) => setInput2(e.target.value)} />
        </Grid>
        <Button mt={4} onClick={runDiff}>
          Run Diff
        </Button>
        {diff && (
          <Box mt={6}>
            <Heading as="h3" size="lg" mb={4}>
              Diff Output
            </Heading>
            <Code p={4} borderRadius="md" backgroundColor={useColorModeValue("gray.100", "gray.700")} whiteSpace="pre-wrap">
              {diff}
            </Code>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Index;
