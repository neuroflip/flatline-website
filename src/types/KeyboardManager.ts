interface KeyboardManagerProps {
  onPageChange: (finalProgressX: number) => void
  nextKeyCode: string
  previousKeyCode: string
  children: React.JSX.Element
}

export type { KeyboardManagerProps }
