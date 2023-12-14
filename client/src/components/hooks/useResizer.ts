import {
	MouseEvent,
	MutableRefObject,
	useCallback,
	useEffect,
	useState
} from 'react'

/**
 * Provide element resizing and returns width of the element
 */
const useResizer = (
	sidebarRef: MutableRefObject<HTMLDivElement>
): [
	sidebarWidth: number,
	startResizing: any
] => {
	const [isResizing, setIsResizing] = useState<boolean>(false)
	const [sidebarWidth, setSidebarWidth] = useState<number>(268)

	const startResizing: any = useCallback((mouseDownEvent: MouseEvent) => {
		setIsResizing(true)
	}, [])

	const stopResizing = useCallback(() => {
		setIsResizing(false)
	}, [])

	const resize: any = useCallback(
		(mouseMoveEvent: MouseEvent) => {
			if (isResizing) {
				setSidebarWidth(
					mouseMoveEvent.clientX -
						sidebarRef.current.getBoundingClientRect().left
				)
			}
		},
		[isResizing, sidebarRef]
	)

	useEffect(() => {
		window.addEventListener('mousemove', resize)
		window.addEventListener('mouseup', stopResizing)

		return () => {
			window.removeEventListener('mousemove', resize)
			window.removeEventListener('mouseup', stopResizing)
		}
	}, [resize, stopResizing])

	return [sidebarWidth, startResizing]
}

export default useResizer
