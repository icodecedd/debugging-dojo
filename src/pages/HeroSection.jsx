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
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 16, md: 0 }}
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
      <Stack align="center" spacing={8} zIndex={1} maxW="1200px">
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
            size={{ base: "3xl", md: "4xl" }}
            fontWeight="extrabold"
            color="white"
            textAlign="center"
            letterSpacing="tight"
          >
            <Flex
              alignItems="center"
              gap={4}
              justifyContent="center"
              direction={{ base: "column", md: "row" }}
            >
              <FaCode aria-label="Code icon" size="2.5rem" color="#9F7AEA" />
              <TextType
                text={[
                  "Master Debugging with Dojo",
                  "Hunt Bugs, Lead the Challenge",
                  "Build Skills, One Fix at a Time",
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
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.300"
            textAlign="center"
            maxW={{ base: "100%", md: "700px" }}
            lineHeight="tall"
          >
            Debug real-world code, earn points, and rise to the top.{" "}
            <Text as="span" color="purple.400" fontWeight="semibold">
              Become a debugging master.
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
            gap={6}
            direction={{ base: "column", md: "row" }}
            mt={{ base: 6, md: 10 }}
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
          duration={600}
          easing="ease-out"
          initialOpacity={0}
        >
          <Button
            as={RouterLink}
            to="/challenges"
            size={{ base: "lg", md: "xl" }}
            color="white"
            borderRadius="lg"
            mt={{ base: 4, md: 8 }}
            bg="purple.500"
            _hover={{ bg: "purple.400", transform: "translateY(-2px)" }}
            _active={{ transform: "translateY(0)" }}
            transition="all 0.2s"
            fontWeight="bold"
          >
            Start Debugging
          </Button>
        </FadeContent>
      </Stack>
    </Container>
  );
};

export default HeroSection;
