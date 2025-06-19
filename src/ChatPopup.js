import React, { useState } from 'react';

function ChatPopup() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('chat');
  const [messages, setMessages] = useState([
    { user: 'User 1', text: 'Hey There , how can I help?' },
    { user: 'User 2', text: 'Nothing bro, just chill!!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { user: 'You', text: input }]);
      setInput('');
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#4F0DCE',
          color: '#fff',
          border: 'none',
          fontSize: 28,
          boxShadow: '0 2px 8px #aaa',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        💬
      </button>
      {/* Popup window */}
      {open && (
        <div style={{
          position: 'fixed',
          bottom: 100,
          right: 30,
          width: 320,
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 16px #aaa',
          zIndex: 1001,
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #eee' }}>
            <div
              onClick={() => setTab('chat')}
              style={{
                flex: 1,
                padding: 12,
                cursor: 'pointer',
                background: tab === 'chat' ? '#f2f2f2' : '#fff',
                fontWeight: tab === 'chat' ? 'bold' : 'normal',
                textAlign: 'center'
              }}
            >
              Chat
            </div>
            <div
              onClick={() => setTab('participants')}
              style={{
                flex: 1,
                padding: 12,
                cursor: 'pointer',
                background: tab === 'participants' ? '#f2f2f2' : '#fff',
                fontWeight: tab === 'participants' ? 'bold' : 'normal',
                textAlign: 'center'
              }}
            >
              Participants
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                border: 'none',
                background: 'none',
                fontSize: 18,
                cursor: 'pointer',
                padding: '0 12px',
                color: '#aaa'
              }}
            >
              ×
            </button>
          </div>
          {tab === 'chat' ? (
            <div style={{ height: 180, overflowY: 'auto', padding: 12 }}>
              {messages.map((msg, idx) => (
                <div key={idx} style={{
                  marginBottom: 10,
                  textAlign: msg.user === 'You' ? 'right' : 'left'
                }}>
                  <span
                    style={{
                      display: 'inline-block',
                      background: msg.user === 'You' ? '#7765DA' : '#eee',
                      color: msg.user === 'You' ? '#fff' : '#373737',
                      borderRadius: 8,
                      padding: '6px 12px',
                      maxWidth: '80%',
                      wordBreak: 'break-word'
                    }}
                  >
                    <strong style={{ fontSize: 12 }}>{msg.user}:</strong> {msg.text}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ height: 180, overflowY: 'auto', padding: 12 }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>Rahul Arora</li>
                <li>Pushpender Rautela</li>
                <li>Ritij Zalpuri</li>
                <li>Nadeem N</li>
                <li>Ashwin Sharma</li>
              </ul>
            </div>
          )}
          {tab === 'chat' && (
            <div style={{ display: 'flex', borderTop: '1px solid #eee', padding: 8 }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                style={{
                  flex: 1,
                  border: '1px solid #ccc',
                  borderRadius: 6,
                  padding: 8,
                  marginRight: 8
                }}
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                style={{
                  background: '#4F0DCE',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '8px 16px',
                  cursor: 'pointer'
                }}
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ChatPopup;