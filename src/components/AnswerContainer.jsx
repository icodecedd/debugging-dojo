import {
  Alert,
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaLightbulb } from "react-icons/fa6";
import { GoCheck } from "react-icons/go";

export const AnswerContainer = ({
  answer,
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
        Complete the code:
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

      {/* Answer form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitAnswer();
        }}
      >
        <Textarea
          id="answer"
          name="answer"
          placeholder="Enter the missing code to fill the blank (___)..."
          size={{ base: "sm", md: "md" }}
          resize="none"
          h={{ base: "80px", md: "100px" }}
          borderRadius="md"
          bg="rgba(45, 47, 55, 0.8)"
          color="white"
          mb={2}
          value={answer}
          onChange={handleAnswerChange}
          borderColor="purple.500"
          fontFamily="mono"
          _placeholder={{
            color: "gray.400",
            fontSize: { base: "sm", md: "md" },
          }}
          _focus={{
            borderColor: "purple.400",
            boxShadow: "0 0 0 1px rgba(128, 90, 213, 0.5)",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.ctrlKey) {
              e.preventDefault();
              handleSubmitAnswer();
            }
          }}
        />
        <Flex justifyContent="space-between" alignItems="center" mt={2} gap={3}>
          <Button
            flex="1"
            bg="purple.500"
            color="white"
            size={{ base: "sm", md: "md" }}
            type="submit"
            borderRadius="md"
            fontWeight="semibold"
            _hover={{
              bg: "purple.400",
              transform: "translateY(-1px)",
            }}
            _active={{ transform: "translateY(0)" }}
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
