import React from "react"

const BranchPickerContext = React.createContext(null)

export function BranchPickerProvider({ children }) {
  const [open, setOpen] = React.useState(false)
  const [intent, setIntent] = React.useState("directions")

  const api = React.useMemo(
    () => ({
      open: nextIntent => {
        setIntent(nextIntent || "directions")
        setOpen(true)
      },
      close: () => setOpen(false),
      isOpen: open,
      intent,
    }),
    [open, intent]
  )

  return (
    <BranchPickerContext.Provider value={api}>{children}</BranchPickerContext.Provider>
  )
}

export function useBranchPicker() {
  const ctx = React.useContext(BranchPickerContext)
  if (!ctx) {
    throw new Error("useBranchPicker must be used within BranchPickerProvider")
  }
  return ctx
}
