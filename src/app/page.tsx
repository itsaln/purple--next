import { Metadata } from 'next'

import { Button, HTag, PTag, Tag } from '@/components'

import styles from './Home.module.scss'

export async function generateMetadata (): Promise<Metadata> {
	return {
		title: 'ComputedMeta',
		icons: {
			icon: '/afdsafsd.ico'
		}
	}
}

export default function Home() {
	return (
		<div className={styles.home}>
			<HTag tag='h2'>Текст</HTag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<PTag size='l'>Большой</PTag>
			<PTag>Средний</PTag>
			<PTag size='s'>Маленький</PTag>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
		</div>
	)
}
