import { SyntheticEvent, useMemo, useRef } from "react";

function isTouchEvent(event: SyntheticEvent) {
	return window.TouchEvent
		? event.nativeEvent instanceof TouchEvent
		: "touches" in event.nativeEvent;
}

function isMouseEvent(event: SyntheticEvent) {
	return event.nativeEvent instanceof MouseEvent;
}

type UseLongPressOptions = {
	threshold?: number;
	onStart?: (event: SyntheticEvent) => void;
	onFinish?: (event: SyntheticEvent) => void;
	onCancel?: (event: SyntheticEvent) => void;
	onRelease?: (event: SyntheticEvent) => void;
};

// Modified from https://github.com/uidotdev/usehooks/blob/main/index.js#L664
export function useLongPress(
	callback: Function,
	options: UseLongPressOptions = {}
) {
	const { threshold = 400, onStart, onFinish, onCancel, onRelease } = options;
	const isLongPressActive = useRef(false);
	const isPressed = useRef(false);
	const timerId = useRef<NodeJS.Timeout | undefined>();

	return useMemo(() => {
		if (typeof callback !== "function") {
			return {};
		}

		const start = (event: SyntheticEvent) => {
			if (!isMouseEvent(event) && !isTouchEvent(event)) return;

			if (onStart) {
				onStart(event);
			}

			isPressed.current = true;
			timerId.current = setTimeout(() => {
				callback(event);
				isLongPressActive.current = true;
			}, threshold);
		};

		const cancel = (event: SyntheticEvent) => {
			if (!isMouseEvent(event) && !isTouchEvent(event)) return;

			if (isLongPressActive.current) {
				if (onFinish) {
					onFinish(event);
				}
			} else if (isPressed.current) {
				if (onCancel) {
					onCancel(event);
				}
			}

			isLongPressActive.current = false;
			isPressed.current = false;

			if (timerId.current) {
				window.clearTimeout(timerId.current);
			}
		};

		const mouseHandlers = {
			onMouseDown: start,
			onMouseUp: (e: SyntheticEvent) => {
				cancel(e);
				onRelease && onRelease(e);
			},
			onMouseLeave: cancel,
		};

		const touchHandlers = {
			onTouchStart: start,
			onTouchEnd: (e: SyntheticEvent) => {
				cancel(e);
				onRelease && onRelease(e);
			},
		};

		return {
			...mouseHandlers,
			...touchHandlers,
		};
	}, [callback, threshold, onCancel, onFinish, onStart, onRelease]);
}
