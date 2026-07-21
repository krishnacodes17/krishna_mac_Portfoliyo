import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss"

function Cli({windowName,setWindowState,windowState}) {
  const availableCommands = [
    "help",
    "whoami",
    "about",
    "skills",
    "projects",
    "contact",
    "social",
    "date",
    "echo",
  ];

  const commands = {
    
    whoami: {
      description: "Display portfolio owner name.",
      usage: "whoami",
      fn: () => "Krishna Gupta",
    },
    about: {
      description: "Short intro for this portfolio.",
      usage: "about",
      fn: () => "Frontend developer building interactive web experiences.",
    },
    skills: {
      description: "List primary skills.",
      usage: "skills",
      fn: () => "HTML, CSS/SCSS, JavaScript, React, UI Animation",
    },
    projects: {
      description: "Show highlighted projects.",
      usage: "projects",
      fn: () => "1) macPortfolio  2) Spotify UI Clone  3) Notes App",
    },
    contact: {
      description: "Show contact email.",
      usage: "contact",
      fn: () => "krishnacodes17.com",
    },
    social: {
      description: "Show social links.",
      usage: "social",
      fn: () => "GitHub: github.com/krishna | LinkedIn: linkedin.com/in/krishna",
    },
    date: {
      description: "Show current local date and time.",
      usage: "date",
      fn: () => new Date().toLocaleString(),
    },
    echo: {
      description: "Echo a passed string.",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `Welcome to Krishna's Portfolio Terminal!\nType "help" to list all commands.\n\nAvailable commands:\n- ${availableCommands.join("\n- ")}`;

  return (
    <MacWindow windowName={windowName}  setWindowState={setWindowState} windowState={windowState}>
    <div className="cli-Window">
        <Terminal
        commands={commands}
        welcomeMessage={welcomeMessage}
        promptLabel={"me@Krishna:~$"}
        contentStyle={{
  background: "#111",
  colur:  "blue",
  padding: "20px",
}}
      />
    </div>
    </MacWindow>
  );
}

export default Cli;
