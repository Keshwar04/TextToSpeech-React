import "./styles.css";
import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function App() {
  const [txtToSpeak, setTextToSpeak] = useState();
  const { speak } = useSpeechSynthesis();

  const translateToSpeech = () => {
    speak({ text: txtToSpeak });
  };
  return (
    <div className="App">
      <textarea onChange={(e) => setTextToSpeak(e.target.value)} />
      <br />
      <br />
      <input
        type="button"
        value="click and get voice"
        onClick={translateToSpeech}
      />
    </div>
  );
}
