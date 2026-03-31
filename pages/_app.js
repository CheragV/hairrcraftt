import "../src/components/styles/layout.css"
import "../src/components/styles/slide-menu.css"

import { BranchPickerProvider } from "../components/BranchPickerContext"
import BranchPickerModal from "../components/BranchPickerModal"

export default function App({ Component, pageProps }) {
  return (
    <BranchPickerProvider>
      <Component {...pageProps} />
      <BranchPickerModal />
    </BranchPickerProvider>
  )
}
