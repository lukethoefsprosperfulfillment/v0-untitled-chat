'use client'

export function ProsperChatHelper() {
  return (
    <iframe
      src="https://prosper-chat-helper.lovable.app"
      style={{
        border: 'none',
        outline: 'none',
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        width: '380px',
        height: '480px',
        zIndex: 9999,
        borderRadius: '0',
        boxShadow: 'none',
        background: 'transparent',
      }}
      allow="clipboard-write"
      title="Prosper Manufacturing Chat Helper"
    />
  )
}
