interface InputManagerProps {
    onPageChange: (finalProgressX: number) => void
    onMovePage: (progressX: number) => void
    onResetColumns: () => void
    onStartTouch: () => void
    children: React.JSX.Element
  }

  export type { InputManagerProps }
