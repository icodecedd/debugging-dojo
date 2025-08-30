import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { Link as RouterLink } from "react-router-dom";
import { FeatureCard } from "@/components/FeatureCard";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCode, FaCodepen, FaLaptopCode } from "react-icons/fa";
import Squares from "@/blocks/Backgrounds/Squares/Squares";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";

const HeroSection = () => {
  return (
    <Container
      as="section"
      id="hero-section"
      minH={{ base: "auto", md: "100vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 16, md: 0 }}
      position="relative"
      overflow="hidden"
      maxW="100%"
    >
      {/* Squares background */}
      <Box position="absolute" inset={0}>
        <Squares
          speed={0.5}
          squareSize={60}
          direction="diagonal"
          borderColor="#5d4064ff"
          hoverFillColor="#222"
        />
      </Box>

      {/* Content container */}
      <Stack align="center" spacing={6} zIndex={1}>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.1}
        >
          {/* Title */}
          <Heading
            size={{ base: "2xl", md: "4xl" }}
            scaling
            color="purple.400"
            textAlign="center"
          >
            <Flex
              alignItems="center"
              gap={3}
              justifyContent="center"
              direction={{ base: "column", md: "row" }}
            >
              <FaCode aria-label="Code icon" size="2rem" />{" "}
              {/* Added aria-label and size */}
              <TextType
                text={[
                  "Welcome to the IT Community Challenge",
                  "Spot the bugs, fix the errors, and climb the leaderboard.",
                  "Perfect your debugging skills one challenge at a time.",
                ]}
                textColors={["purple.500", "purple.400", "purple.500"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </Flex>
          </Heading>

          {/* Subtitle */}
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.400"
            textAlign="center"
            maxW={{ base: "100%", md: "800px" }}
          >
            Join our IT community challenge! Spot the bugs, fix the errors, and
            climb the leaderboard.{" "}
            <Text as="span" color="purple.400" fontWeight="bold">
              Perfect your debugging skills one challenge at a time.
            </Text>
          </Text>
        </AnimatedContent>

        {/* Cards */}
        <FadeContent
          blur={true}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          <Flex
            gap={4}
            direction={{ base: "column", md: "row" }}
            mt={{ base: 4, md: 8 }}
          >
            <FeatureCard
              icon={FaLaptopCode}
              title="Real Code"
              description="Debug actual code snippets from real-world scenarios"
            />
            <FeatureCard
              icon={FaCodepen}
              title="Interactive"
              description="Get instant feedback on your debugging solutions"
            />
            <FeatureCard
              icon={FaCode}
              title="Fun"
              description="Challenge yourself and have fun learning and debugging"
            />
          </Flex>
        </FadeContent>

        {/* Button */}
        <FadeContent
          blur={true}
          duration={500}
          easing="ease-out"
          initialOpacity={0}
        >
          <Button
            as={RouterLink}
            to="/challenges"
            size={{ base: "md", md: "lg" }}
            color="white"
            borderRadius="md"
            mt={{ base: 2, md: 8 }}
            bg="purple.600"
            _hover={{ bg: "purple.500" }}
          >
            Start Challenge
          </Button>
        </FadeContent>
      </Stack>
    </Container>
  );
};

export default HeroSection;
