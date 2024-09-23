import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Chatbot.module.css';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' as const };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInput('');

    try {
      const response = await axios.post('/api/chatbot', { message: input });
      const botMessage = { text: response.data.reply, sender: 'bot' as const };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const botMessage = { text: 'Sorry, something went wrong.', sender: 'bot' as const };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  return (
    <div className={styles.chatbot}>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className={styles.input}
        />
        <button onClick={sendMessage} className={styles.button}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
