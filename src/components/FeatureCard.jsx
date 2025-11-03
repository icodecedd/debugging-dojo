import { Card, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export const FeatureCard = ({ icon: Icon, title, description }) => {
  const iconSize = useBreakpointValue({ base: "1.5rem", md: "2rem" });

  return (
    <Card.Root
      bg="#212428"
      w={{ base: "240px", md: "280px" }}
      borderRadius="2xl"
      border="#212428"
      boxShadow="md"
      _hover={{ transform: "translateY(-5px)" }}
      transition="transform 0.3s ease-in-out"
      alignItems="center"
    >
      <Card.Body textAlign="center" alignItems="center" p={{ base: 4, md: 6 }}>
        {/* Render the passed icon dynamically */}
        {Icon && (
          <Icon
            aria-label={`${title} icon`}
            size={iconSize}
            color="#7c7cc2ff"
          />
        )}

        <Card.Title
          fontSize={{ base: "md", md: "xl" }}
          mt={{ base: 1.5, md: 2 }}
          color="white"
        >
          {title}
        </Card.Title>
        <Card.Description
          fontSize={{ base: "xs", md: "md" }}
          lineHeight={{ base: "1.4", md: "1.6" }}
        >
          {description}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};
