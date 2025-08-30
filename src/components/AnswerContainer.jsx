import {
  Alert,
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { FaLightbulb } from "react-icons/fa6";
import { GoCheck } from "react-icons/go";

export const AnswerContainer = ({
  answer,
  handleAnswerChange,
  handleSubmitAnswer,
  currentHintState,
  handleHint,
  challenge,
}) => {
  return (
    <Box
      p={6}
      borderRadius="2xl"
      bg="#212428"
      mb={6}
      transition="border-color 0.2s ease"
    >
      <Heading fontSize="xl" mb={6}>
        What's the answer?
      </Heading>
      {currentHintState.showHint && (
        <Alert.Root
          variant="subtle"
          borderRadius="xl"
          bg="#38362e"
          color="#ecce52"
          mb={4}
        >
          <Alert.Indicator>
            <FaLightbulb />
          </Alert.Indicator>
          <Alert.Title>{challenge.hint}</Alert.Title>
          <CloseButton
            size="2xs"
            pos="absolute"
            top={2}
            right={2}
            _hover={{ bg: "transparent" }}
            onClick={() =>
              setCurrentHintState((prev) => ({ ...prev, showHint: false }))
            }
          />
        </Alert.Root>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitAnswer();
        }}
      >
        <Textarea
          id="answer"
          name="answer"
          placeholder="Describe the bug you found..."
          size="lg"
          resize="none"
          h="120px"
          borderRadius="2xl"
          bg="#282c32"
          color="white"
          mb={2}
          value={answer}
          onChange={handleAnswerChange}
          _placeholder={{ color: "gray.400", fontSize: "lg" }}
          _focus={{ borderColor: "purple.500" }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmitAnswer();
            }
          }}
        />
        <Flex justifyContent="space-between" alignItems="center" mt={2} gap={4}>
          <Button
            flex="1"
            bg="purple.500"
            color="white"
            size="lg"
            type="submit"
            bgColor="purple.600"
            borderRadius="xl"
            _hover={{
              bg: "purple.500",
            }}
          >
            <GoCheck /> Submit
          </Button>
          <Button
            disabled={
              currentHintState.numberOfHintsLeft === 0 ||
              currentHintState.isHintAlreadyShown
            }
            variant="ghost"
            onClick={handleHint}
            colorScheme="purple"
            borderRadius="xl"
            size="sm"
            color="gray.400"
            _hover={{
              bg: "purple.500",
              color: "white",
            }}
          >
            <FaLightbulb /> Hint: {currentHintState.numberOfHintsLeft}
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
