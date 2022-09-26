import React from 'react'
import cl from './MyModal.module.css'

const MyModal = props => {
	return (
		<div className={cl.MyModal}>
			<div onClick={() => props.handler(false)} className={cl.overlay}>
				<div onClick={e => e.stopPropagation()} className={cl.modal__content}>
					<div onClick={() => props.handler(false)} className={cl.modal__close}>
						X
					</div>
					{props.children}
				</div>
			</div>
		</div>
	)
}

export default MyModal
