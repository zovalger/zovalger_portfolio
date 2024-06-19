"use client";

import { useEffect, useRef, useState } from "react";

interface props {
	toObserver?: HTMLElement | undefined;
	onVisible(): void;
	onNoVisible?(): void;
	options?: IntersectionObserverInit;
}

const useIntersectionObserver = ({
	toObserver,
	onVisible,
	onNoVisible,
	options = {},
}: props) => {
	const [observed, setObserved] = useState(false);
	const [InOb, setInOb] = useState<null | IntersectionObserver>(null);

	const handleVisible = () => {
		console.log("visto");

		setObserved(true);
		onVisible();
	};
	const handleNoVisible = () => {
		if (onNoVisible) onNoVisible();

		setObserved(false);
	};

	useEffect(() => {
		const a = new IntersectionObserver((entrie) => {
			if (entrie[0].intersectionRatio <= 0) return handleNoVisible();

			handleVisible();
		}, options);

		if (toObserver) a.observe(toObserver);

		setInOb(a);

		return () => {
			if (InOb) InOb.disconnect();
		};
	}, [toObserver]);

	// useEffect(() => {
	// 	ref.current.disconnect();

	// 	if (toObserver) ref.current.observe(toObserver);

	// 	return () => {
	// 		ref.current.disconnect();
	// 	};
	// }, [toObserver]);

	return { observed };
};

export default useIntersectionObserver;
