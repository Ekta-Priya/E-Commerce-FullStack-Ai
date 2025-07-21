import React, { useContext, useEffect, useRef, useState } from "react";
import ai from "../assets/ai.png";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Ai() {
  

  const { showSearch, setShowSearch } = useContext(shopDataContext);
  const navigate = useNavigate();
  const recognitionRef = useRef(null);
  const [activeAi, setActiveAi] = useState(false);

  function speak(message) {
    console.log("Speaking:", message);
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    }
  }

  useEffect(() => {
    console.log("useEffect for SpeechRecognition running...");

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    console.log("SpeechRecognition is", SpeechRecognition);

    if (!SpeechRecognition) {
      toast.error("Speech Recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = false; 

    recognition.onstart = () => {
      console.log("Recognition started");
      setActiveAi(true);
      toast.info("Listening...");
    };

    recognition.onresult = (e) => {
      console.log("Got Speech Recognition Result:", e);
      const transcript = e.results[0][0].transcript.toLowerCase().trim();
      console.log(" Transcript:", transcript);

      if (transcript.includes("open search")) {
        speak("Opening search");
        setShowSearch(true);
      } else if (transcript.includes("close search")) {
        speak("Closing search");
        setShowSearch(false);
      } else if (
        transcript.includes("collections") ||
        transcript.includes("collection") ||
        transcript.includes("products") ||
        transcript.includes("product")
      ) {
        speak("Opening collections page");
        navigate("/collections");
      } else if (transcript.includes("about")) {
        speak("Opening about page");
        navigate("/about");
      } else if (transcript.includes("home")) {
        speak("Opening home page");
        navigate("/");
      } else if (transcript.includes("cart") || transcript.includes("car")) {
        speak("Opening your cart");
        navigate("/cart");
      } else if (transcript.includes("contact")) {
        speak("Opening contact page");
        navigate("/contact");
      } else if (
        transcript.includes("order") ||
        transcript.includes("my order") ||
        transcript.includes("orders")
      ) {
        speak("Opening order page");
        navigate("/order");
      } else {
        speak("Sorry, I did not understand that command.");
        toast.error("Command not recognized. Please try again.");
      }
    };

    recognition.onerror = (e) => {
      console.log("Recognition error", e);
      setActiveAi(false);
      if (e.error === "no-speech") {
        toast.error("No speech detected. Please speak clearly.");
      } else {
        toast.error(`Speech recognition error: ${e.error}`);
      }
    };

    recognition.onend = () => {
      console.log(" Recognition ended");
      setActiveAi(false);
      toast.info("Listening stopped.");
    };

    recognitionRef.current = recognition;
  }, [navigate, setShowSearch, showSearch]);

  const startListening = () => {
    console.log(" startListening clicked");
    console.log("recognitionRef.current:", recognitionRef.current);

    if (recognitionRef.current && !activeAi) {
      recognitionRef.current.start();
    } else {
      console.warn("Recognition already active or not initialized");
    }
  };

  return (
    <div
      className="fixed bottom-[80px] left-[2%] z-50"
      onClick={startListening}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && startListening()}
      aria-label="Activate voice commands"
    >
      <img
        src={ai}
        alt="Voice command icon"
        className={`w-[100px] cursor-pointer ${
          activeAi
            ? "translate-x-[10%] translate-y-[10%] scale-125"
            : "translate-x-[0] translate-y-[0] scale-100"
        } transition-transform`}
        style={{
          filter: `${
            activeAi
              ? "drop-shadow(0px 0px 30px #00d2fc)"
              : "drop-shadow(0px 0px 20px #000)"
          }`,
        }}
      />
    </div>
  );
}

export default Ai;
