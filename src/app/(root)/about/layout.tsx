import { ReactNode } from 'react'

export default function AboutLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div style={{ border: '1px solid #fff' }}>
			{children}
		</div>
	)
}
