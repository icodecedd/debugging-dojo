import {
  Alert,
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Text,
  RadioGroup,
} from "@chakra-ui/react";
import { FaLightbulb } from "react-icons/fa6";
import { GoCheck } from "react-icons/go";

export const MultipleChoiceContainer = ({
  selectedAnswer,
  handleAnswerChange,
  handleSubmitAnswer,
  currentHintState,
  setCurrentHintState,
  handleHint,
  challenge,
}) => {
  return (
    <Box
      p={{ base: 3, md: 4 }}
      borderRadius="xl"
      bg="rgba(30, 32, 40, 0.95)"
      border="1px solid"
      borderColor="purple.500"
      mb={0}
      position="relative"
      boxShadow="0 8px 32px rgba(128, 90, 213, 0.25)"
      backdropFilter="blur(10px)"
    >
      <Heading
        fontSize={{ base: "md", md: "lg" }}
        mb={4}
        color="purple.300"
        fontWeight="bold"
      >
        What's the bug?
      </Heading>
      {currentHintState.showHint && (
        <Alert.Root
          variant="subtle"
          borderRadius="md"
          bg="rgba(236, 201, 75, 0.15)"
          border="1px solid"
          borderColor="yellow.400"
          color="#ecce52"
          mb={3}
        >
          <Alert.Indicator>
            <FaLightbulb />
          </Alert.Indicator>
          <Alert.Title fontSize={{ base: "xs", md: "sm" }}>
            {challenge.hint}
          </Alert.Title>
          <CloseButton
            size="xs"
            pos="absolute"
            top={2}
            right={2}
            color="yellow.400"
            _hover={{ bg: "transparent", color: "yellow.300" }}
            onClick={() =>
              setCurrentHintState((prev) => ({ ...prev, showHint: false }))
            }
          />
        </Alert.Root>
      )}

      {/* Multiple choice form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitAnswer();
        }}
      >
        <RadioGroup.Root
          value={selectedAnswer}
          onValueChange={(details) => handleAnswerChange(details.value || "")}
          mb={4}
        >
          <RadioGroup.Label
            fontSize={{ base: "sm", md: "md" }}
            color="gray.300"
            mb={3}
            fontWeight="semibold"
          >
            Select the correct answer:
          </RadioGroup.Label>
          <Flex direction="column" gap={3}>
            {challenge.options.map((option, index) => (
              <Box
                key={index}
                as="label"
                cursor="pointer"
                borderRadius="md"
                p={{ base: 3, md: 4 }}
                bg={
                  selectedAnswer === index.toString()
                    ? "rgba(128, 90, 213, 0.2)"
                    : "rgba(45, 47, 55, 0.8)"
                }
                border="1px solid"
                borderColor={
                  selectedAnswer === index.toString()
                    ? "purple.400"
                    : "purple.500"
                }
                _hover={{
                  borderColor: "purple.400",
                  bg: "rgba(55, 57, 65, 0.9)",
                }}
                transition="all 0.2s"
                display="flex"
                alignItems="flex-start"
                gap={3}
                position="relative"
                w="full"
                onClick={() => handleAnswerChange(index.toString())}
              >
                <RadioGroup.Item
                  value={index.toString()}
                  style={{
                    position: "absolute",
                    opacity: 0,
                    width: 0,
                    height: 0,
                  }}
                />
                <Box position="relative" flexShrink={0} mt={0.5}>
                  <Box
                    w="4"
                    h="4"
                    borderRadius="full"
                    border="2px solid"
                    borderColor={
                      selectedAnswer === index.toString()
                        ? "purple.400"
                        : "purple.500"
                    }
                    bg={
                      selectedAnswer === index.toString()
                        ? "purple.400"
                        : "transparent"
                    }
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {selectedAnswer === index.toString() && (
                      <Box w="2" h="2" borderRadius="full" bg="white" />
                    )}
                  </Box>
                </Box>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="white"
                  flex="1"
                  wordWrap="break-word"
                  whiteSpace="normal"
                  pointerEvents="none"
                >
                  {option}
                </Text>
              </Box>
            ))}
          </Flex>
        </RadioGroup.Root>

        <Flex justifyContent="space-between" alignItems="center" gap={3}>
          <Button
            flex="1"
            bg="purple.500"
            color="white"
            size={{ base: "sm", md: "md" }}
            type="submit"
            borderRadius="md"
            fontWeight="semibold"
            isDisabled={selectedAnswer === ""}
            _hover={{
              bg: "purple.400",
              transform: "translateY(-1px)",
            }}
            _active={{ transform: "translateY(0)" }}
            _disabled={{
              opacity: 0.5,
              cursor: "not-allowed",
            }}
            transition="all 0.2s"
          >
            <GoCheck />{" "}
            <Text mt={0.5} fontSize={{ base: "xs", md: "sm" }}>
              Submit
            </Text>
          </Button>
          <Button
            disabled={
              currentHintState.numberOfHintsLeft === 0 ||
              currentHintState.isHintAlreadyShown
            }
            variant="ghost"
            onClick={handleHint}
            borderRadius="md"
            size={{ base: "xs", md: "sm" }}
            color="purple.300"
            _hover={{
              bg: "purple.500",
              color: "white",
            }}
            _disabled={{
              opacity: 0.4,
              cursor: "not-allowed",
            }}
          >
            <FaLightbulb />{" "}
            <Text mt={0.5} fontSize={{ base: "xs", md: "sm" }}>
              Hint: {currentHintState.numberOfHintsLeft}
            </Text>
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
