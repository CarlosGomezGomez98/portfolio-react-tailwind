import { useState, useCallback, createContext, useContext } from "react"
import { Toaster } from "@/components/Toaster"

const ToastContext = createContext(null)

let count = 0
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

export const ToastProviderWrapper = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const toast = useCallback(({ ...props }) => {
    const id = genId()
    const dismiss = () => setToasts((prev) => prev.filter((t) => t.id !== id))

    setToasts((prev) => [
      {
        id,
        open: true,
        duration: 15000,
        onOpenChange: (open) => {
          if (!open) dismiss()
        },
        ...props,
      },
      ...prev,
    ].slice(0, 5))

    return { id, dismiss }
  }, [])

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toast, toasts, dismiss }}>
      {children}
      <Toaster toasts={toasts} dismiss={dismiss} />
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProviderWrapper")
  }
  return context
}
