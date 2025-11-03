import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
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
  const codeBlockSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <CodeBlock.AdapterProvider value={shikiAdapter} aria-label="Code block">
      <CodeBlock.Root
        code={challenge.code}
        language={challenge.language}
        size={codeBlockSize}
        meta={{ wordWrap: true }}
        p={{ base: 3, md: 4 }}
        mb={4}
        position="relative"
        borderRadius="xl"
        bg="rgba(22, 24, 29, 0.95)"
        border="1px solid"
        borderColor="purple.500"
        boxShadow="0 8px 32px rgba(128, 90, 213, 0.25)"
        backdropFilter="blur(10px)"
        aria-label="Code block"
      >
        <Flex>
          <Box
            position="absolute"
            top={{ base: "12px", md: "14px" }}
            left={{ base: "16px", md: "20px" }}
            display="flex"
            gap={{ base: "6px", md: "8px" }}
          >
            <Box
              w={{ base: "10px", md: "12px" }}
              h={{ base: "10px", md: "12px" }}
              borderRadius="full"
              bg="red.400"
              _hover={{ bg: "red.500" }}
            />
            <Box
              w={{ base: "10px", md: "12px" }}
              h={{ base: "10px", md: "12px" }}
              borderRadius="full"
              bg="yellow.400"
              _hover={{ bg: "yellow.500" }}
            />
            <Box
              w={{ base: "10px", md: "12px" }}
              h={{ base: "10px", md: "12px" }}
              borderRadius="full"
              bg="green.400"
              _hover={{ bg: "green.500" }}
            />
          </Box>
          <Text
            position="absolute"
            top={{ base: "12px", md: "14px" }}
            right={{ base: "16px", md: "20px" }}
            fontSize={{ base: "xs", md: "sm" }}
            color="purple.300"
            fontWeight="medium"
          >
            {`${challenge.title}.${challenge.language}`}
          </Text>
        </Flex>
        <CodeBlock.Content mt={{ base: 5, md: 6 }}>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  );
};
