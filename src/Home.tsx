import React from "react";
import {
  VStack,
  Box,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

interface EmailProps {
  sender: string;
}

// Email Component
const Email: React.FC<EmailProps> = ({ sender }) => {
  const { open: isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box className="email-box" onClick={onOpen}>
        <Box className="email-emoji" fontSize="2xl">
          <Text>💌</Text>
        </Box>
        <Text className="email-text"> message from: {sender}</Text>
      </Box>

      {/* Custom Dialog */}
      {isOpen && (
        <Box
          className="overlay"
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="rgba(0, 0, 0, 0.5)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex="1000"
          onClick={onClose}
        >
          <Box
            bg="white"
            p={5}
            borderRadius="md"
            onClick={(e) => e.stopPropagation()}
          >
            <Button onClick={onClose} mb={4}>
              Close
            </Button>
            
            <Text>Message from {sender}</Text>
          </Box>
        </Box>
      )}
    </>
  );
};

// Main Inbox Component
const Inbox: React.FC = () => {

  const emailData = [
    { id: 1, sender: "Jackie" },
    { id: 2, sender: "Sophia N" },
    { id: 3, sender: "Sarah Z" },
    { id: 4, sender: "Nina" },
    { id: 5, sender: "Evan" },
    { id: 6, sender: "Aydan" },
    { id: 7, sender: "Esha" },
    { id: 8, sender: "Pin" },
    { id: 9, sender: "Nate" },
    { id: 10, sender: "Grant" },
    { id: 11, sender: "Emily" },
    { id: 12, sender: "Quinn" },
    { id: 13, sender: "Justin" },
    { id: 14, sender: "Amit" },
    { id: 15, sender: "Leah" },
    { id: 16, sender: "Sophia L" },
    { id: 17, sender: "Sophia Z" },
    { id: 18, sender: "Anjali" },
    { id: 19, sender: "Jessie" },
    { id: 20, sender: "Yash" },
    { id: 21, sender: "Yesui" },
    { id: 22, sender: "Tachel" },
    { id: 23, sender: "Sarena" },
    { id: 24, sender: "Racheezi" },
    { id: 25, sender: "Daniel" },
    { id: 26, sender: "Sarah L" },
    { id: 27, sender: "Anvita" },
    { id: 28, sender: "Sachin" },
    { id: 29, sender: "Mason" },
    { id: 30, sender: "Deeya" },
    { id: 31, sender: "Lasya" },
  ];
  

  return (
    <VStack
      className="inbox-container"
      overflowY="auto"
      maxHeight="70vh"
      width="1500px"
    >
      {emailData.map((email) => (
        <Email key={email.id} sender={email.sender} />
      ))}
    </VStack>
  );
};

// Home Component
const Home: React.FC = () => {
  return (
    <div>
      <h1>welcome sunny@hbd.com</h1>
      <p>you have 31 new messages ^-^</p>
      <Inbox />
    </div>
  );
};

export default Home;
