import React from 'react'
import { Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  title?: string
  description?: string
  onClose: () => void
  children?: React.ReactNode
}
const Modal = (props: ModalProps) => {
  const { isOpen, onClose, title, description, children } = props
  return (
    <AnimatePresence>
      <Dialog
        initial={{ y:-200 }}
        animate={{ y: 0, opacity:1 }}
        exit={{ y: 300, x:0, opacity:0 }}
        key={Math.random()}
        as={motion.div}
        open={isOpen} onClose={onClose}>
        <div className='inset-0 z-[500] fixed bg-dark-2/80' />
        <div className='fixed inset-0 z-[500]'>
          <div className='fixed inset-0 flex z[1000] overflow-y-auto items-center justify-center'>
            <Dialog.Panel>
              {title && <Dialog.Title>{title}</Dialog.Title> }
              {description && <Dialog.Description>{description}</Dialog.Description> }
              <motion.div
                className='min-w-[80vw] min-h-[80vh] overflow-y-auto'>
                {children}
              </motion.div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </AnimatePresence>
  )
}

export default Modal
