import React from 'react'
import { useContext, useEffect } from 'react'
import Cards from '../components/Cards'
import Header from './Header'
import Featured from './Featured'

const Main = () => {
	const styles = {
		container: `h-full w-full flex flex-col mt-[50px] overflow-hidden pb-20`,
		recentTitle: `text-2xl font-bold text-center mb-[20px] text-center mt-[40px]`,
		recentTransactionsList: `flex flex-col`,
		transactionCard: `flex justify-between mb-[20px] p-[30px] bg-[#42667e] text-white rounded-xl shadow-xl font-bold gap-[20px] text-xl`,
	}

	return (
		<div className={styles.container}>
			<Header />
			{/* <Featured /> */}
			<Cards />
		</div>
	)
}

export default Main