import {
  Dialog,
  Button,
  Text,
  Flex,
  Portal,
  CloseButton,
  Heading,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { RiResetLeftFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";

export const ResultDialog = ({ isOpen, onClose, accuracy, onPlayAgain }) => {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(e) => !e.open && onClose()}
      placement="center"
      motionPreset="scale"
      size="md"
    >
      <Portal>
        <Dialog.Backdrop bg="blackAlpha.800" />
        <Dialog.Positioner>
          <Dialog.Content
            bg="#212428"
            borderRadius="2xl"
            p={6}
            mx={{ base: 4, md: 0 }}
          >
            <Dialog.Body>
              <Flex direction="column" align="center" gap={4}>
                <Heading fontSize="2xl" color="purple.500">
                  Challenge Complete!
                </Heading>
                <Text fontSize="lg" color="gray.300">
                  Your final accuracy:
                </Text>
                <Text
                  fontSize="4xl"
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
                <Text fontSize="md" color="gray.400" textAlign="center">
                  {accuracy >= 80
                    ? "Outstanding performance!"
                    : accuracy >= 50
                    ? "Great effort, keep practicing!"
                    : "Don't worry, try again to improve!"}
                </Text>
              </Flex>
            </Dialog.Body>
            <Dialog.Footer>
              <Flex gap={4} w="full" justify="center">
                <Dialog.ActionTrigger asChild>
                  <Button
                    variant="ghost"
                    onClick={onPlayAgain}
                    colorScheme="purple"
                    borderRadius="xl"
                    size="lg"
                    color="gray.400"
                    _hover={{
                      bg: "purple.500",
                      color: "white",
                    }}
                    leftIcon={<RiResetLeftFill />}
                  >
                    Play Again
                  </Button>
                </Dialog.ActionTrigger>
                <Dialog.ActionTrigger asChild>
                  <Button
                    variant="ghost"
                    as={RouterLink}
                    to="/"
                    colorScheme="purple"
                    borderRadius="xl"
                    size="lg"
                    color="gray.400"
                    _hover={{
                      bg: "purple.500",
                      color: "white",
                    }}
                    leftIcon={<FaHome />}
                    onClick={onClose}
                  >
                    Home
                  </Button>
                </Dialog.ActionTrigger>
              </Flex>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton
                size="sm"
                position="absolute"
                top={2}
                right={2}
                _hover={{ bg: "transparent" }}
              />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ResultDialog;
