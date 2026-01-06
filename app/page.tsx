"use client";

import React, { useState, useEffect } from 'react';

export default function DeliveryDashboard() {
  const [isPulsing, setIsPulsing] = useState(true);

  // Animation effect for the pulsing green dot
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '20px'
    }}>
      {/* Mobile Container */}
      <div style={{
        width: '100%',
        maxWidth: '500px',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '90vh'
      }}>
        
        {/* Logo */}
        <img 
          src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
          alt="mishTee Logo" 
          style={{ width: '80px', marginBottom: '16px' }}
        />

        {/* Title */}
        <h1 style={{
          color: '#FF8C00', // Dark Orange
          fontSize: '22px',
          fontWeight: 'bold',
          margin: '0 0 12px 0',
          textAlign: 'center'
        }}>
          mishTee Delivery Mitra
        </h1>

        {/* Status Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#e8f5e9',
          padding: '6px 16px',
          borderRadius: '20px',
          marginBottom: '32px'
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            backgroundColor: '#4CAF50',
            borderRadius: '50%',
            boxShadow: isPulsing ? '0 0 8px #4CAF50' : 'none',
            transition: 'box-shadow 0.5s ease-in-out'
          }}></div>
          <span style={{ 
            color: '#2e7d32', 
            fontSize: '14px', 
            fontWeight: '600' 
          }}>
            Agent Online
          </span>
        </div>

        {/* Task Card */}
        <div style={{
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid #f0f0f0',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          marginBottom: 'auto' // Pushes button to bottom
        }}>
          <p style={{ color: '#666', fontSize: '12px', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Current Task
          </p>
          <h2 style={{ color: '#333', fontSize: '18px', margin: '0' }}>
            Deliver to: <span style={{ fontWeight: '800' }}>Arjun Mehta</span>
          </h2>
          <div style={{ 
            marginTop: '12px', 
            fontSize: '14px', 
            color: '#888',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            📍 4th Block, Koramangala, Bengaluru
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => alert('Opening Navigation...')}
          style={{
            width: '100%',
            backgroundColor: '#FF8C00',
            color: '#ffffff',
            border: 'none',
            borderRadius: '12px',
            padding: '18px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '24px',
            boxShadow: '0 4px 15px rgba(255, 140, 0, 0.3)',
            transition: 'transform 0.1s active'
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Start Navigation
        </button>

      </div>
    </div>
  );
}
