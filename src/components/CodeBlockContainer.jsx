import { Box, Flex, Text } from "@chakra-ui/react";
import { CodeBlock, createShikiAdapter } from "@chakra-ui/react";

const shikiAdapter = createShikiAdapter({
  async load() {
    const { createHighlighter } = await import("shiki");
    return createHighlighter({
      langs: ["js", "java", "python", "c"],
      themes: ["github-dark", "github-light"],
    });
  },
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
});

export const CodeBlockContainer = ({ challenge }) => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter} aria-label="Code block">
      <CodeBlock.Root
        code={challenge.code}
        language={challenge.language}
        size="xl"
        p={6}
        mb={6}
        position="relative"
        borderRadius="2xl"
        bg="#16181d"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        aria-label="Code block"
      >
        <Flex>
          <Box
            position="absolute"
            top="16px"
            left="24px"
            display="flex"
            gap="8px"
          >
            <Box
              w="12px"
              h="12px"
              borderRadius="full"
              bg="red.500"
              _hover={{ bg: "red.600" }}
            />
            <Box
              w="12px"
              h="12px"
              borderRadius="full"
              bg="yellow.500"
              _hover={{ bg: "yellow.600" }}
            />
            <Box
              w="12px"
              h="12px"
              borderRadius="full"
              bg="green.500"
              _hover={{ bg: "green.600" }}
            />
          </Box>
          <Text
            position="absolute"
            top="16px"
            right="24px"
            fontSize={"xs"}
            color="gray.400"
          >
            debug-challenge.js
          </Text>
        </Flex>
        <CodeBlock.Content mt={6}>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  );
};
