import React from 'react';

function KickedOut() {
  return (
    <div style={{ textAlign: 'center', marginTop: '150px' }}>
      <span
        style={{
          display: 'inline-block',
          background: '#4F0DCE',
          color: '#fff',
          borderRadius: '12px',
          padding: '6px 18px',
          fontWeight: 'bold',
          fontSize: 14,
          marginBottom: 30,
        }}
      >
        Intervue Poll
      </span>
      <h1 style={{ margin: '20px 0 10px 0' }}>
        You’ve been <span style={{ color: '#4F0DCE' }}>Kicked out</span> !
      </h1>
      <p style={{ color: '#666', fontSize: 16, marginTop: 10 }}>
        Looks like the teacher had removed you from the poll system.<br />
        Please try again sometime.
      </p>
    </div>
  );
}

export default KickedOut;