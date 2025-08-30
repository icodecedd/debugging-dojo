import { Box, Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { RiResetLeftFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import Squares from "@/blocks/Backgrounds/Squares/Squares";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import { challenges } from "@/data/questions.js";
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
    <Container as="section" minH="100vh" p={{ base: 10, md: 20 }} maxW="100%">
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
          p={6}
          borderRadius="2xl"
          bg="#212428"
          mb={6}
          position="relative"
          transition="border-color 0.2s ease"
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={{ base: "center", md: "center" }}
            justify="space-between"
          >
            <Flex
              direction="row"
              gap={2}
              mb={{ base: 4, lg: 0 }}
              order={{ base: 1, lg: 3 }}
            >
              <Button
                variant="ghost"
                onClick={handleResetChallenge}
                colorScheme="purple"
                borderRadius="xl"
                size="sm"
                color="gray.400"
                _hover={{
                  bg: "purple.500",
                  color: "white",
                }}
              >
                <RiResetLeftFill />
                Reset
              </Button>
              <Button
                variant="ghost"
                as={RouterLink}
                to="/"
                colorScheme="purple"
                borderRadius="xl"
                size="sm"
                color="gray.400"
                _hover={{
                  bg: "purple.500",
                  color: "white",
                }}
              >
                <FaHome />
                Home
              </Button>
            </Flex>
            <Box
              textAlign="center"
              flex="1"
              mx={{ base: 0, lg: 6 }}
              mb={{ base: 4, lg: 0 }}
              order={{ base: 2, md: 2 }}
            >
              <Heading fontSize="2xl" color="purple.500" mb={1}>
                Challenge {progress}: {challenges[currentChallenge].title}
              </Heading>
              <Text fontSize="md" color="gray.300">
                {challenges[currentChallenge].text}
              </Text>
            </Box>
            <Box textAlign="center" order={{ base: 3, lg: 1 }}>
              <Text
                fontSize="sm"
                fontWeight="medium"
                color="purple.400"
                mb={1}
                display="flex"
                alignItems="center"
                gap={2}
                justifyContent="center"
              >
                <FaBullseye /> Accuracy
              </Text>
              <Text
                fontSize="2xl"
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
