import React from 'react'

export const metadata = {
  title: 'Velixir Studio',
  description: 'Velixir Parfums Content Management System',
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#101112] text-white overflow-auto">
      {children}
    </div>
  )
}
