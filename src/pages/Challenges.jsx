import { Box, Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { RiResetLeftFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import Squares from "@/blocks/Backgrounds/Squares/Squares";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import { challenges } from "@/constants/questions.js";
import { toaster } from "@/components/ui/toaster";
import { FaBullseye } from "react-icons/fa6";
import { CodeBlockContainer } from "@/components/CodeBlockContainer";
import { AnswerContainer } from "@/components/AnswerContainer";
import { ResultDialog } from "@/components/ResultDialog";

const Challenges = () => {
  const [currentChallenge, setCurrentChallenge] = useState(
    Math.floor(Math.random() * challenges.length)
  );
  const [visited, setVisited] = useState([]);
  const [progress, setProgress] = useState(1);
  const [answer, setAnswer] = useState("");
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

  const accuracy =
    attemptsInfo.totalAttempts === 0
      ? 0
      : Math.round(
          (attemptsInfo.correctAttempts / attemptsInfo.totalAttempts) * 100
        );

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const MAX_LENGTH = 5;

  const handleSubmitAnswer = () => {
    const userAnswer = answer.trim().toLowerCase();
    const validAnswers = challenges[currentChallenge].answers.map((ans) =>
      ans.toLowerCase()
    );
    const isCorrect = validAnswers.includes(userAnswer);

    if (!userAnswer) {
      toaster.create({
        title: "Please enter an answer",
        type: "error",
        closable: true,
      });
      return;
    }

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

    setVisited((prevVisited) => {
      const updatedVisited = [...prevVisited, currentChallenge];

      setProgress(Math.min(updatedVisited.length + 1, MAX_LENGTH));

      if (updatedVisited.length >= MAX_LENGTH) {
        setTimeout(() => {
          toaster.dismiss(); // Dismiss all toasts
          setIsDialogOpen(true); // Open dialog
        }, 0);
        return updatedVisited;
      }

      const remaining = challenges
        .map((_, i) => i)
        .filter((i) => !updatedVisited.includes(i));

      if (remaining.length > 0) {
        const next = remaining[Math.floor(Math.random() * remaining.length)];
        setCurrentChallenge(next);
      }

      return updatedVisited;
    });

    setAnswer("");
    setCurrentHintState({
      showHint: false,
      isHintAlreadyShown: false,
      numberOfHintsLeft: currentHintState.numberOfHintsLeft,
    });
  };

  const handleResetChallenge = () => {
    setCurrentChallenge(Math.floor(Math.random() * challenges.length));
    setVisited([]);
    setAnswer("");
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
      p={{ base: 4, md: 12 }}
      maxW="100%"
      bg="gray.900"
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
          p={{ base: 4, md: 6 }}
          borderRadius="2xl"
          bg="gray.800"
          border="1px"
          borderColor="purple.600"
          mb={6}
          position="relative"
          boxShadow="lg"
          mt={{ base: 0, md: 8 }}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={4}
          >
            {/* Buttons */}
            <Flex direction="row" gap={3} order={{ base: 1, lg: 3 }}>
              <Button
                variant="outline"
                onClick={handleResetChallenge}
                colorScheme="purple"
                borderRadius="lg"
                size={{ base: "sm", md: "md" }}
                color="purple.300"
                borderColor="purple.500"
                _hover={{
                  bg: "purple.600",
                  color: "white",
                }}
              >
                <RiResetLeftFill aria-label="Reset icon" />
                <Text ml={1}>Reset</Text>
              </Button>
              <Button
                variant="outline"
                as={RouterLink}
                to="/"
                colorScheme="purple"
                borderRadius="lg"
                size={{ base: "sm", md: "md" }}
                color="purple.300"
                borderColor="purple.500"
                _hover={{
                  bg: "purple.600",
                  color: "white",
                }}
              >
                <FaHome aria-label="Home icon" />
                <Text ml={1}>Home</Text>
              </Button>
            </Flex>

            {/* Challenge Info */}
            <Box
              textAlign="center"
              flex="1"
              mx={{ base: 0, lg: 6 }}
              order={{ base: 2, md: 2 }}
            >
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                color="purple.300"
                mb={2}
                fontWeight="extrabold"
                letterSpacing="tight"
              >
                Mission {progress}: {challenges[currentChallenge].title}
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.300"
                maxW="600px"
                mx="auto"
              >
                {challenges[currentChallenge].text}
              </Text>
            </Box>
            {/* Accuracy */}
            <Box textAlign="center" order={{ base: 3, lg: 1 }}>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="purple.400"
                mb={1}
                display="flex"
                alignItems="center"
                gap={2}
                justifyContent="center"
              >
                <FaBullseye aria-label="Accuracy icon" /> Accuracy
              </Text>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
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
              <Text fontSize="sm" color="gray.400">
                Success Rate
              </Text>
            </Box>
          </Flex>
        </Box>
        <CodeBlockContainer challenge={challenges[currentChallenge]} />
        <AnswerContainer
          answer={answer}
          handleAnswerChange={handleAnswerChange}
          handleSubmitAnswer={handleSubmitAnswer}
          currentHintState={currentHintState}
          setCurrentHintState={setCurrentHintState}
          handleHint={handleHint}
          challenge={challenges[currentChallenge]}
        />
        <ResultDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          accuracy={accuracy}
          onPlayAgain={handleResetChallenge}
        />
      </FadeContent>
    </Container>
  );
};

export default Challenges;
