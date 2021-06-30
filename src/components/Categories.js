import '../styles/main/Categories.scss'

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='c-categories'>
			<label>Catégories :</label>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='categories-select'
			>
				<option value=''>Select a category</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories