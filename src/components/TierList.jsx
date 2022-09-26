import React, { useState } from 'react'
import TierListBoard from './TierListBoard'

const TierList = props => {
	const [boards, setBoards] = useState(props.boards)
	const [currentBoard, setCurrentBoard] = useState(null)
	const [currentItem, setCurrentItem] = useState(null)
	const handler = {
		dragStart(e, board, item = 'tier') {
			setCurrentBoard(board)
			setCurrentItem(item)
		},

		dragOver(e) {
			e.preventDefault()
		},

		dragEnd(e) {},

		dragLeave(e) {},

		drop(e, board, item) {
			e.preventDefault()
			if (
				e.target.className === 'tierlist__item-img' &&
				currentItem !== 'tier'
			) {
				const indexItem = currentBoard.items.indexOf(currentItem)
				const indexItemDrop = board.items.indexOf(item)
				currentBoard.items.splice(indexItem, 1)
				board.items.splice(indexItemDrop, 0, currentItem)
				setBoards(
					boards.map(b => {
						if (b.id === board.id) {
							return board
						}
						if (b.id === currentBoard.id) {
							return currentBoard
						}
						return b
					})
				)
			}
		},
		dropEmpty(e, board) {
			e.preventDefault()
			if (
				e.target.className === 'tierlist__content' &&
				currentItem !== 'tier'
			) {
				const indexItem = currentBoard.items.indexOf(currentItem)
				currentBoard.items.splice(indexItem, 1)
				board.items.push(currentItem)
				setBoards(
					boards.map(b => {
						if (b.id === board.id) {
							return board
						}
						if (b.id === currentBoard.id) {
							return currentBoard
						}
						return b
					})
				)
			}
		},
		dropBoard(e, board) {
			e.preventDefault()
			if (e.target.className === 'tierlist__tier' && currentItem === 'tier') {
				const indexCurrentBoard = boards.indexOf(currentBoard)
				const indexBoard = boards.indexOf(board)
				if (indexCurrentBoard !== indexBoard) {
					boards.splice(indexCurrentBoard, 1)
					boards.splice(indexBoard, 0, currentBoard)
					setBoards(
						boards.map(b => {
							if (b.id === board.id) {
								return board
							}
							if (b.id === currentBoard.id) {
								return currentBoard
							}
							return b
						})
					)
				}
			}
		},
	}

	return (
		<div className='tierlist'>
			<div className='tierlist__title'>
				<h2>Tier List</h2>
				<span
					onClick={() =>
						setBoards([
							...boards,
							{
								id: Date.now(),
								tier: '?',
								color: 'white',
								items: [],
							},
						])
					}
					className='tierlist__plus'
				>
					+
				</span>
			</div>
			{boards.map(board =>
				board.id ? (
					<TierListBoard
						key={board.id}
						className='tierlist__board'
						board={board}
						handler={handler}
					/>
				) : (
					''
				)
			)}
			<TierListBoard
				key={boards[0].id}
				className='tierlist__data'
				board={boards[0]}
				handler={handler}
			/>
		</div>
	)
}

export default TierList
