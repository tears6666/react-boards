import { Route, Routes } from 'react-router-dom'
import Basket from '../pages/Basket/Basket'
import Catalog from '../pages/Catalog/Catalog'
import { Layout } from './layout/Layout'

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Catalog />} />
				<Route path='/basket' element={<Basket />} />
			</Route>
		</Routes>
	)
}
