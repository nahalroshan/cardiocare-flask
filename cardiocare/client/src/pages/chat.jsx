import { useState, useEffect, useRef } from "react";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { auth, app } from "../dbconfig/firebase";

const db = getFirestore(app);

function Chat() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp(),
    });

    setNewMessage("");
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-between py-10 min-h-screen">
      {user ? (
        <div className="items-center mt-4 flex flex-col justify-center ml-20">
          <h1 className="text-6xl text-blue-950">The CardioCare Community</h1>
          <div
            className="flex mt-4   mb-2 flex-col items gap-5 p-8  border-bg-gradient-to-r from-transparent to-gray-200   rounded-xl overflow-y-auto "
            style={{ maxHeight: "calc(100vh - 280px)", width: "500px" }}
          >
            {messages.map((msg, index) => (
              <div
                key={msg.id}
                ref={index === messages.length - 1 ? messagesEndRef : null}
                className={`message flex ${
                  msg.data.uid === user.uid ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`message flex flex-row p-3 gap-3 rounded-lg items-center ${
                    msg.data.uid === user.uid ? "text-blue-950" : "text-white"
                  }`}
                >
                  {msg.data.uid === user.uid ? (
                    <div className="flex flex-row-reverse gap-3 items-center">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={msg.data.photoURL}
                        alt="User avatar"
                      />
                      <div className="bg-blue-500 text-white p-3 rounded-lg">
                        {msg.data.text}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-row gap-3 items-center">
                      <img
                        className="w-8 h-8 rounded-full ml-3"
                        src={msg.data.photoURL}
                        alt="User avatar"
                      />
                      <div className="bg-white p-3 rounded-lg text-black">
                        {msg.data.text}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600"
          >
            Login with Google
          </button>
        </div>
      )}
      <div className="flex flex-col items-center">
        <div className="mb-2">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Type your message..."
          />
        </div>
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Chat;
