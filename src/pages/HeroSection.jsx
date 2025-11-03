import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { useNavigate } from "react-router-dom";
import { FeatureCard } from "@/components/FeatureCard";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Dialog,
  Portal,
  CloseButton,
} from "@chakra-ui/react";
import {
  FaCode,
  FaCodepen,
  FaLaptopCode,
  FaBug,
  FaCheckCircle,
} from "react-icons/fa";
import Squares from "@/blocks/Backgrounds/Squares/Squares";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import { useState } from "react";

const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Container
      as="section"
      id="hero-section"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 8, md: 0 }}
      position="relative"
      overflow="hidden"
      maxW="100%"
      bg="gray.900"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        minH="100%" // Ensures it covers the entire container
        w="100%"
      >
        <Squares
          speed={0.5}
          squareSize={60}
          direction="diagonal"
          borderColor="#5d4064ff"
          hoverFillColor="#222"
        />
      </Box>

      {/* Content container */}
      <Stack
        align="center"
        spacing={{ base: 4, md: 6 }}
        zIndex={1}
        maxW="1200px"
      >
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={true}
          duration={0.8}
          ease="power4.out"
          initialOpacity={0}
          animateOpacity
          scale={1.05}
          threshold={0.2}
        >
          {/* Title */}
          <Heading
            size={{ base: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            color="white"
            textAlign="center"
            letterSpacing="tight"
          >
            <Flex
              alignItems="center"
              gap={3}
              justifyContent="center"
              direction={{ base: "column", md: "row" }}
            >
              <FaCode aria-label="Code icon" size="2rem" color="#9F7AEA" />
              <TextType
                text={[
                  "Master Code Completion",
                  "Complete Real Code Challenges",
                  "Build Skills, One Solution at a Time",
                ]}
                textColors={["purple.300", "white", "purple.300"]}
                typingSpeed={60}
                pauseDuration={1200}
                showCursor={true}
                cursorCharacter="|"
              />
            </Flex>
          </Heading>

          {/* Subtitle */}
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.300"
            textAlign="center"
            maxW={{ base: "100%", md: "650px" }}
            lineHeight="tall"
            mt={{ base: 2, md: 3 }}
          >
            Complete real-world code snippets, track your progress, and enhance
            your coding skills.{" "}
            <Text as="span" color="purple.400" fontWeight="semibold">
              Elevate your programming expertise.
            </Text>
          </Text>
        </AnimatedContent>

        {/* Cards */}
        <FadeContent
          blur={true}
          duration={600}
          easing="ease-out"
          initialOpacity={0}
        >
          <Flex
            gap={{ base: 3, md: 4 }}
            direction={{ base: "column", md: "row" }}
            mt={{ base: 3, md: 6 }}
          >
            <FeatureCard
              icon={FaLaptopCode}
              title="Real Code"
              description="Complete actual code snippets from professional scenarios"
            />
            <FeatureCard
              icon={FaCodepen}
              title="Interactive"
              description="Receive instant feedback on your code solutions"
            />
            <FeatureCard
              icon={FaCode}
              title="Progressive"
              description="Build expertise through structured coding challenges"
            />
          </Flex>
        </FadeContent>

        {/* Button */}
        <FadeContent
          blur={true}
          duration={600}
          easing="ease-out"
          initialOpacity={0}
        >
          <Button
            onClick={() => setIsDialogOpen(true)}
            size={{ base: "md", md: "lg" }}
            color="white"
            borderRadius="lg"
            mt={{ base: 3, md: 6 }}
            bg="purple.500"
            _hover={{ bg: "purple.400", transform: "translateY(-2px)" }}
            _active={{ transform: "translateY(0)" }}
            transition="all 0.2s"
            fontWeight="bold"
          >
            Start Coding
          </Button>
        </FadeContent>
      </Stack>

      {/* Mode Selection Dialog */}
      <Dialog.Root
        open={isDialogOpen}
        onOpenChange={(e) => setIsDialogOpen(e.open)}
        placement="center"
        motionPreset="scale"
        size="md"
      >
        <Portal>
          <Dialog.Backdrop bg="blackAlpha.800" />
          <Dialog.Positioner>
            <Dialog.Content
              bg="rgba(30, 32, 40, 0.95)"
              borderRadius="xl"
              p={{ base: 4, md: 6 }}
              mx={{ base: 4, md: 0 }}
              border="1px solid"
              borderColor="purple.500"
              boxShadow="0 8px 32px rgba(128, 90, 213, 0.25)"
              backdropFilter="blur(10px)"
            >
              <Dialog.Body>
                <Flex direction="column" align="center" gap={4}>
                  <Heading
                    fontSize={{ base: "lg", md: "xl" }}
                    color="purple.300"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    Choose Your Challenge Mode
                  </Heading>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.300"
                    textAlign="center"
                  >
                    Select how you want to practice:
                  </Text>
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={3}
                    w="full"
                    align="stretch"
                  >
                    <Button
                      flex="1"
                      onClick={() => {
                        setIsDialogOpen(false);
                        navigate("/complete-the-code");
                      }}
                      size={{ base: "md", md: "lg" }}
                      bg="purple.500"
                      color="white"
                      borderRadius="lg"
                      _hover={{
                        bg: "purple.400",
                        transform: "translateY(-2px)",
                      }}
                      _active={{ transform: "translateY(0)" }}
                      transition="all 0.2s"
                      fontWeight="bold"
                      p={{ base: 3, md: 4 }}
                      flexDirection="column"
                      gap={1.5}
                      h="auto"
                      minW={0}
                      whiteSpace="normal"
                      wordWrap="break-word"
                    >
                      <FaCheckCircle size="1.5rem" />
                      <Text fontSize={{ base: "sm", md: "md" }} noOfLines={1}>
                        Complete the Code
                      </Text>
                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color="purple.200"
                        fontWeight="normal"
                        noOfLines={2}
                        textAlign="center"
                      >
                        Fill in missing code snippets
                      </Text>
                    </Button>
                    <Button
                      flex="1"
                      onClick={() => {
                        setIsDialogOpen(false);
                        navigate("/debug");
                      }}
                      size={{ base: "md", md: "lg" }}
                      bg="purple.500"
                      color="white"
                      borderRadius="lg"
                      _hover={{
                        bg: "purple.400",
                        transform: "translateY(-2px)",
                      }}
                      _active={{ transform: "translateY(0)" }}
                      transition="all 0.2s"
                      fontWeight="bold"
                      p={{ base: 3, md: 4 }}
                      flexDirection="column"
                      gap={1.5}
                      h="auto"
                      minW={0}
                      whiteSpace="normal"
                      wordWrap="break-word"
                    >
                      <FaBug size="1.5rem" />
                      <Text fontSize={{ base: "sm", md: "md" }} noOfLines={1}>
                        Debug the Code
                      </Text>
                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color="purple.200"
                        fontWeight="normal"
                        noOfLines={2}
                        textAlign="center"
                      >
                        Identify bugs with multiple choice
                      </Text>
                    </Button>
                  </Flex>
                </Flex>
              </Dialog.Body>
              <Dialog.CloseTrigger asChild>
                <CloseButton
                  size="sm"
                  position="absolute"
                  top={2}
                  right={2}
                  color="purple.300"
                  _hover={{ bg: "transparent", color: "purple.200" }}
                />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Container>
  );
};

export default HeroSection;
