'use client'

export function ProsperChatHelper() {
  return (
    <iframe
      src="https://prosper-chat-helper.lovable.app"
      style={{
        border: 'none',
        outline: 'none',
        position: 'fixed',
        bottom: '40px',
        right: '20px',
        width: '380px',
        height: '520px',
        zIndex: 9999,
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
      }}
      allow="clipboard-write"
      title="Prosper Manufacturing Chat Helper"
    />
  )
}
