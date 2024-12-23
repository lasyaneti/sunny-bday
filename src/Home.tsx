import React from "react";
import {
  VStack,
  Box,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

interface EmailProps {
  emoji: string;
  sender: string;
  url: string;
}

// Email Component
const Email: React.FC<EmailProps> = ({ emoji, sender, url }) => {
  const { open: isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box className="email-box" onClick={onOpen}>
        <Box className="email-emoji" fontSize="2xl">
          <Text>{emoji}</Text>
        </Box>
        <Text className="email-text"> message from {sender}</Text>
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
            
            <Text marginBottom={"10px"}>{sender} says...</Text>
            <iframe width="560" height="315" src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          </Box>
        </Box>
      )}
    </>
  );
};

// Main Inbox Component
const Inbox: React.FC = () => {

  const emailData = [
    { id: 1, emoji: "🌻", sender: "Yash", url: "https://www.youtube.com/embed/kNCe2-s6Kkk?feature=share" },
    { id: 2, emoji: "💌", sender: "Yesui", url: "https://www.youtube.com/embed/nD5jA3u187o?feature=share" },
    { id: 3, emoji: "🥳", sender: "Aydan", url: "https://www.youtube.com/embed/JVj5OKv4_hw?feature=share" },
    { id: 4, emoji: "🎀", sender: "Sophia L", url: "https://www.youtube.com/embed/uOKB_JCLye0?feature=share" },
    { id: 5, emoji: "🎂", sender: "Leah", url: "https://www.youtube.com/embed/vE-0vykVMcE?feature=share" },
    { id: 6, emoji: "😸", sender: "Justin", url: "https://www.youtube.com/embed/IA7BE-n3R4s" },
    { id: 7, emoji: "🌻", sender: "Amit", url: "https://www.youtube.com/embed/Zw2_hn4omOI?feature=share" },
    { id: 8, emoji: "💌", sender: "Nate", url: "https://www.youtube.com/embed/hfCJR3tfFY0?feature=share" },
    { id: 9, emoji: "🥳", sender: "Grant", url: "https://www.youtube.com/embed/lDSLG4cA6OA" },
    { id: 10, emoji: "🎀", sender: "Jessie", url: "https://www.youtube.com/embed/AVRsEtqRhsU?feature=share" },
    { id: 11, emoji: "🎂", sender: "Anjali (placeholder)", url: "" },
    { id: 12, emoji: "😸", sender: "Sophia Z", url: "https://www.youtube.com/embed/rDEwlIj-I0U?feature=share" },
    { id: 13, emoji: "🌻", sender: "Quinn", url: "https://www.youtube.com/embed/Da3zthGeFKo?feature=share" },
    { id: 14, emoji: "💌", sender: "Emily", url: "https://www.youtube.com/embed/MoFHDMmPjtI" },
    { id: 15, emoji: "🥳", sender: "Sophia N", url: "https://www.youtube.com/embed/Gj0KORxZlKU?feature=share" },
    { id: 16, emoji: "🎀", sender: "Esha", url: "https://www.youtube.com/embed/LMTKGWsCyOY" },
    { id: 17, emoji: "🎂", sender: "Pin", url: "https://www.youtube.com/embed/xGHBc2jYLtU?feature=share" },
    { id: 18, emoji: "😸", sender: "Sai", url: "https://www.youtube.com/embed/7CRUe3gXKfk" },
    { id: 19, emoji: "🌻", sender: "Racheezi", url: "https://www.youtube.com/embed/rU42JyugV60?feature=share" },
    { id: 20, emoji: "💌", sender: "Nina", url: "https://www.youtube.com/embed/lu7hkHjVdaw?feature=share" },
    { id: 21, emoji: "🥳", sender: "Sarah Z", url: "https://www.youtube.com/embed/rYAxa5UTqa4" },
    { id: 22, emoji: "🎀", sender: "Sarah L (placeholder)", url: "" },
    { id: 23, emoji: "🎂", sender: "Daniel L (placeholder)", url: "" },
    { id: 24, emoji: "😸", sender: "Tachel", url: "https://www.youtube.com/embed/jpWzhVLYmiE" },
    { id: 25, emoji: "🌻", sender: "Sarena", url: "https://www.youtube.com/embed/LLyX7mX16mQ" },
    { id: 26, emoji: "💌", sender: "Evan (placeholder)", url: "" },
    { id: 27, emoji: "🥳", sender: "Jackie (placeholder)", url: "" },
    { id: 28, emoji: "🎀", sender: "Deeya", url: "https://www.youtube.com/embed/BhFwyoDHhX4" },
    { id: 29, emoji: "🎂", sender: "Anvita", url: "https://www.youtube.com/embed/l9jE_bPXOK4" },
    { id: 30, emoji: "😸", sender: "Sachin", url: "https://www.youtube.com/embed/Zc85Z0fVVCY" },
    { id: 31, emoji: "🌻", sender: "Mason", url: "https://www.youtube.com/embed/Ze8wnQpu72Y" },
    { id: 32, emoji: "💌", sender: "Lasya", url: "https://www.youtube.com/embed/bgTdZ4Tw9Nw" },
  ];
  

  return (
    <VStack
      className="inbox-container"
      overflowY="auto"
      maxHeight="60vh"
      width="1500px"
    >
      {emailData.map((email) => (
        <Email key={email.id} emoji={email.emoji} sender={email.sender} url={email.url} />
      ))}
    </VStack>
  );
};

// Home Component
const Home: React.FC = () => {
  return (
    <div>
      <h1>welcome sunny@hbd.com</h1>
      <p>you have 32 new messages ^-^</p>
      <Inbox />
    </div>
  );
};

export default Home;
