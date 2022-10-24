function AppFilter(props) {
    function renderFilterItem() {
        const items = props.items;

        return (
            items.map(item =>
                <li key={item.forHtml} className="filter__item" onClick={() => props.typeSort(item.forHtml)}>
                    <input className="filter__item_input" type="radio" name="filter" id={item.forHtml} />
                    <label className="filter__item_label" htmlFor={item.forHtml}>
                        {item.name}
                    </label>
                </li>
            )
        )
    }

    return (
        <div className="main__filter filter">
            <div className="filter__title">
                Фильтровать по
            </div>
            <ul className="filter__list">
                {renderFilterItem()}
            </ul>
        </div>
    );
}

export default AppFilter;