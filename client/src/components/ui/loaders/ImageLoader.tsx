import ContentLoader, { IContentLoaderProps } from 'react-content-loader'

export type ImageProps = {
	width: number
	height: number
}

export type ImageLoaderProps = IContentLoaderProps | ImageProps

export const ImageLoader = (props: ImageLoaderProps) => {
	return (
		<ContentLoader
			viewBox={`0 0 ${props.width} ${props.height}`}
			height={props.height}
			width={props.width}
			{...props}
		>
			<rect
				x='0'
				y='60'
				rx='2'
				ry='2'
				width={props.width}
				height={props.height}
			/>
		</ContentLoader>
	)
}
