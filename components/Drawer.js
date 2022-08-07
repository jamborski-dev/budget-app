import { AnimatePresence, motion } from "framer-motion"
import { useDrawerContext } from "../hooks/useDrawerContext"

export const Drawer = () => {
  const {
    state: { isOpen },
    actions: { setOpen }
  } = useDrawerContext()

  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="content-drawer__overlay"
          ></motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="content-drawer"
        variants={{
          open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
          closed: { opacity: 1, x: "-100%", transition: { duration: 0.3, ease: "easeOut" } }
        }}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
      >
        <header className="content-drawer__header">
          <div className="content-drawer__tab">
            <label className="content-drawer__tab-label">Income</label>
          </div>
          <div className="content-drawer__tab -active">
            <label className="content-drawer__tab-label">Expense</label>
          </div>
        </header>
        <div className="content-drawer__content">
          Set of relevant inputs here
          <button className="btn content-drawer__close" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      </motion.div>
    </>
  )
}
