import { Suspense } from "react"
const withLazy = (Component) => {

	const Container = (props) => {
		return <Suspense fallback={<div className="loader">
			<img img={"/src/img/loader.gif"} alt="load..." />
		</div>}>
			<Component {...props} />
		</Suspense>
	}

	return Container
}

export default withLazy

