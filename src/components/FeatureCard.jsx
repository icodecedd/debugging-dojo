import { Card } from "@chakra-ui/react";
import React from "react";

export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Card.Root
      bg="#212428"
      w="280px"
      borderRadius="2xl"
      border="#212428"
      boxShadow="md"
      _hover={{ transform: "translateY(-5px)" }}
      transition="transform 0.3s ease-in-out"
      alignItems="center"
    >
      <Card.Body textAlign="center" alignItems="center">
        {/* Render the passed icon dynamically */}
        {Icon && (
          <Icon aria-label={`${title} icon`} size="2rem" color="#7c7cc2ff" />
        )}

        <Card.Title fontSize={{ base: "lg", md: "xl" }} mt={2} color="white">
          {title}
        </Card.Title>
        <Card.Description fontSize={{ base: "sm", md: "md" }}>{description}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
};
