import React, { useState } from 'react'
import { HuePicker, SketchPicker } from 'react-color'
import TierListItem from './TierListItem'
import MyModal from './UI/MyModal/MyModal'

const TierListBoard = ({ board, handler, ...props }) => {
	const [showModal, setShowModal] = useState(false)
	const [inputValue, setInputValue] = useState(board.tier)
	const [tierColor, setTierColor] = useState(board.color)
	const [tierTextColor, setTierTextColor] = useState('black')

	return (
		<div
			{...props}
			onDragOver={handler.dragOver}
			onDrop={e => handler.dropEmpty(e, board)}
		>
			{showModal ? (
				<MyModal handler={setShowModal}>
					<input
						className='modal__input'
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
					/>
					<HuePicker
						color={tierColor}
						onChangeComplete={e => setTierColor(e.hex)}
						className='board__color'
					/>
					<SketchPicker
						color={tierTextColor}
						onChangeComplete={e => setTierTextColor(e.hex)}
						className='board__text-color'
					/>
				</MyModal>
			) : (
				''
			)}
			{board.id ? (
				<div
					className='tierlist__tier'
					style={{ background: tierColor, color: tierTextColor }}
					draggable={true}
					onDragStart={e => handler.dragStart(e, board)}
					onDragOver={e => handler.dragOver(e)}
					onDrop={e => handler.dropBoard(e, board)}
				>
					{inputValue}
				</div>
			) : (
				''
			)}
			<div className='tierlist__content'>
				{board.items.map(item => (
					<TierListItem
						key={item.id}
						item={item}
						board={board}
						handler={handler}
					/>
				))}
			</div>
			{board.id ? (
				<div className='tierlist__setting'>
					<img
						onClick={() => setShowModal(true)}
						className='tierlist__setting-icon'
						src='https://cdn-icons-png.flaticon.com/512/545/545754.png'
						alt=''
					/>
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default TierListBoard
