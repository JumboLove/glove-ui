import React, { ReactNode } from "react";
type PageHeaderProps = {
	children: ReactNode;
};

export function PageHeader({ children }: PageHeaderProps) {
	return (
		<h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
			{children}
		</h2>
	);
}
