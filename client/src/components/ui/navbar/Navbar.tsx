import { ArrowNavButtonTile } from './../buttons/ArrowNavButton'
import { MainMenuButton } from './../buttons/MainMenuButton'

const Navbar = () => {
	return (
		<nav className="h-[60px] w-full bg-transperent">
			<div className="container flex justify-between flex-row">
				<div className="flex flex-row">
					<MainMenuButton />
					<ArrowNavButtonTile to={'both'} />
				</div>
			</div>
		</nav>
	)
}

export default Navbar