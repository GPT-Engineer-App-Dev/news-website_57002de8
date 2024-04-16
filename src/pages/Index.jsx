import { Box, Flex, Heading, Text, Image, VStack, HStack, Button, Spacer } from "@chakra-ui/react";
import { FaRegNewspaper, FaRegHeart, FaRegComments } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" maxW="1200px" mx="auto">
        <Heading mb={4}>News Today</Heading>
        <HStack spacing={5} mb={5}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1581092787765-e3feb951d987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYW5jaG9yfGVufDB8fHx8MTcxMzI2NzE2M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="News Anchor" />
          <VStack align="left">
            <Heading size="md">Top Story</Heading>
            <Text fontSize="lg">Breaking news happening right now across the world.</Text>
          </VStack>
        </HStack>
        <VStack spacing={4}>
          <NewsArticle title="Global Markets Rally" summary="Markets around the world surged today after news of economic recovery." imageUrl="https://images.unsplash.com/photo-1618044733300-9472054094ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBtYXJrZXR8ZW58MHx8fHwxNzEzMjY3MTY2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <NewsArticle title="Tech Innovations 2023" summary="This year's top tech innovations that are set to change the world." imageUrl="https://images.unsplash.com/photo-1488229297570-58520851e868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwwfHx8fDE3MTMyNjcxNjh8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <NewsArticle title="Healthcare Advances" summary="New breakthroughs in healthcare promise a brighter future for all." imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlfGVufDB8fHx8MTcxMzI2NzE3MHww&ixlib=rb-4.0.3&q=80&w=1080" />
        </VStack>
      </Flex>
    </Box>
  );
};

const NewsArticle = ({ title, summary, imageUrl }) => {
  return (
    <Flex bg="gray.100" p={4} borderRadius="lg" width="full" align="center">
      <Image boxSize="100px" borderRadius="md" src={imageUrl} alt={title} />
      <Box ml={4}>
        <Heading size="sm">{title}</Heading>
        <Text mt={2}>{summary}</Text>
        <HStack spacing={2} mt={2}>
          <Button size="sm" leftIcon={<FaRegHeart />}>
            Like
          </Button>
          <Button size="sm" leftIcon={<FaRegComments />}>
            Comment
          </Button>
          <Spacer />
          <Button size="sm" variant="ghost" leftIcon={<FaRegNewspaper />}>
            Read More
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Index;
