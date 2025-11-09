import { Box, Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RiResetLeftFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import Squares from "@/blocks/Backgrounds/Squares/Squares";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import { debugChallenges } from "@/constants/debugQuestions.js";
import { toaster } from "@/components/ui/toaster";
import { FaBullseye } from "react-icons/fa6";
import { CodeBlockContainer } from "@/components/CodeBlockContainer";
import { MultipleChoiceContainer } from "@/components/MultipleChoiceContainer";
import { ResultDialog } from "@/components/ResultDialog";

const ChallengesDebug = () => {
  const [shuffledIndices, setShuffledIndices] = useState(() =>
    [...Array(debugChallenges.length).keys()].sort(() => Math.random() - 0.5)
  );
  const [questionPointer, setQuestionPointer] = useState(0);

  const [currentChallenge, setCurrentChallenge] = useState(
    shuffledIndices[questionPointer]
  );
  const [progress, setProgress] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [currentHintState, setCurrentHintState] = useState({
    showHint: false,
    isHintAlreadyShown: false,
    numberOfHintsLeft: 3,
  });
  const [attemptsInfo, setAttemptsInfo] = useState({
    totalAttempts: 0,
    correctAttempts: 0,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setCurrentChallenge(shuffledIndices[questionPointer]);
  }, [questionPointer, shuffledIndices]);

  const accuracy =
    attemptsInfo.totalAttempts === 0
      ? 0
      : Math.round(
          (attemptsInfo.correctAttempts / attemptsInfo.totalAttempts) * 100
        );

  const handleAnswerChange = (value) => {
    setSelectedAnswer(value);
  };

  const MAX_LENGTH = 5;

  const advanceToNextChallenge = () => {
    setQuestionPointer((prevPointer) => {
      let nextPointer = prevPointer + 1;
      if (nextPointer >= shuffledIndices.length) {
        toaster.create({
          title:
            "You've completed all challenges! The question pool has been reset.",
          type: "info",
          closable: true,
        });
        const newShuffled = [...Array(debugChallenges.length).keys()].sort(
          () => Math.random() - 0.5
        );
        setShuffledIndices(newShuffled);
        nextPointer = 0;
      }
      return nextPointer;
    });
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === "") {
      toaster.create({
        title: "Please select an answer",
        type: "error",
        closable: true,
      });
      return;
    }

    const userAnswerIndex = parseInt(selectedAnswer);
    const isCorrect =
      userAnswerIndex === debugChallenges[currentChallenge].correctAnswer;

    setAttemptsInfo((prev) => ({
      totalAttempts: prev.totalAttempts + 1,
      correctAttempts: isCorrect
        ? prev.correctAttempts + 1
        : prev.correctAttempts,
    }));

    toaster.create({
      title: isCorrect ? "You got it right!" : "You got it wrong!",
      type: isCorrect ? "success" : "error",
      closable: true,
    });

    if (progress >= MAX_LENGTH) {
      setTimeout(() => {
        toaster.dismiss();
        setIsDialogOpen(true);
      }, 0);
    } else {
      setProgress((prev) => prev + 1);
      advanceToNextChallenge();
    }

    setSelectedAnswer("");
    setCurrentHintState({
      showHint: false,
      isHintAlreadyShown: false,
      numberOfHintsLeft: currentHintState.numberOfHintsLeft,
    });
  };

  const handlePlayAgain = () => {
    setProgress(1);
    setAttemptsInfo({
      totalAttempts: 0,
      correctAttempts: 0,
    });
    setIsDialogOpen(false);
    advanceToNextChallenge();
  };

  const handleReset = () => {
    const newShuffled = [...Array(debugChallenges.length).keys()].sort(
      () => Math.random() - 0.5
    );
    setShuffledIndices(newShuffled);
    setQuestionPointer(0);

    setSelectedAnswer("");
    setProgress(1);
    setCurrentHintState({
      showHint: false,
      isHintAlreadyShown: false,
      numberOfHintsLeft: 3,
    });
    setAttemptsInfo({
      totalAttempts: 0,
      correctAttempts: 0,
    });
    setIsDialogOpen(false);
  };

  const handleHint = () => {
    setCurrentHintState({
      showHint: true,
      isHintAlreadyShown: true,
      numberOfHintsLeft: currentHintState.numberOfHintsLeft - 1,
    });
  };

  return (
    <Container
      as="section"
      minH="100vh"
      p={{ base: 3, md: 6 }}
      maxW="100%"
      bg="gray.900"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
    >
      <Box position="absolute" inset={0}>
        <Squares
          speed={0.5}
          squareSize={60}
          direction="diagonal"
          borderColor="#5d4064ff"
          hoverFillColor="#222"
        />
      </Box>

      <FadeContent
        blur={true}
        duration={600}
        easing="ease-out"
        initialOpacity={0}
      >
        <Box
          p={{ base: 3, md: 4 }}
          borderRadius="xl"
          bg="rgba(30, 32, 40, 0.95)"
          border="1px solid"
          borderColor="purple.500"
          mb={4}
          position="relative"
          boxShadow="0 8px 32px rgba(128, 90, 213, 0.25)"
          mt={{ base: 0, md: 4 }}
          backdropFilter="blur(10px)"
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={3}
          >
            {/* Buttons */}
            <Flex direction="row" gap={2} order={{ base: 1, lg: 3 }}>
              <Button
                variant="outline"
                onClick={handleReset}
                borderRadius="md"
                size={{ base: "xs", md: "sm" }}
                color="purple.300"
                borderColor="purple.500"
                bg="transparent"
                _hover={{
                  bg: "purple.500",
                  color: "white",
                  borderColor: "purple.400",
                }}
              >
                <RiResetLeftFill aria-label="Reset icon" />
                <Text ml={1} fontSize={{ base: "xs", md: "sm" }}>
                  Reset
                </Text>
              </Button>
              <Button
                variant="outline"
                as={RouterLink}
                to="/"
                borderRadius="md"
                size={{ base: "xs", md: "sm" }}
                color="purple.300"
                borderColor="purple.500"
                bg="transparent"
                _hover={{
                  bg: "purple.500",
                  color: "white",
                  borderColor: "purple.400",
                }}
              >
                <FaHome aria-label="Home icon" />
                <Text ml={1} fontSize={{ base: "xs", md: "sm" }}>
                  Home
                </Text>
              </Button>
            </Flex>

            {/* Challenge Info */}
            <Box
              textAlign="center"
              flex="1"
              mx={{ base: 0, lg: 4 }}
              order={{ base: 2, md: 2 }}
            >
              <Heading
                fontSize={{ base: "lg", md: "xl" }}
                color="purple.300"
                mb={1.5}
                fontWeight="bold"
                letterSpacing="tight"
              >
                Mission {progress}: {debugChallenges[currentChallenge].title}
              </Heading>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="gray.300"
                maxW="600px"
                mx="auto"
                lineHeight="short"
              >
                {debugChallenges[currentChallenge].text}
              </Text>
            </Box>
            {/* Accuracy */}
            <Box textAlign="center" order={{ base: 3, lg: 1 }}>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="semibold"
                color="purple.400"
                mb={0.5}
                display="flex"
                alignItems="center"
                gap={1.5}
                justifyContent="center"
              >
                <FaBullseye aria-label="Accuracy icon" /> Accuracy
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color={
                  accuracy >= 80
                    ? "green.400"
                    : accuracy >= 50
                    ? "yellow.400"
                    : "red.400"
                }
              >
                {accuracy}%
              </Text>
              <Text fontSize={{ base: "xs", md: "sm" }} color="gray.400">
                Success Rate
              </Text>
            </Box>
          </Flex>
        </Box>
        <CodeBlockContainer challenge={debugChallenges[currentChallenge]} />
        <MultipleChoiceContainer
          selectedAnswer={selectedAnswer}
          handleAnswerChange={handleAnswerChange}
          handleSubmitAnswer={handleSubmitAnswer}
          currentHintState={currentHintState}
          setCurrentHintState={setCurrentHintState}
          handleHint={handleHint}
          challenge={debugChallenges[currentChallenge]}
        />
        <ResultDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          accuracy={accuracy}
          onPlayAgain={handlePlayAgain}
        />
      </FadeContent>
    </Container>
  );
};

export default ChallengesDebug;
